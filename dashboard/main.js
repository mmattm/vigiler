//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
    //
    vigiler.init();
});

//

var vigiler = (function() {

    var nums = [0, 0, 0, 0];

    var categories = [
        [
            "<i title=\"Stratégies\" class=\"fa fa-diamond fa-2x fa-spin\"><\/i>",
            "<i title=\"Politique tarifaires\" class=\"fa fa-usd fa-2x\"><\/i>",
            "<i title=\"Nouveaux produits ou services\" class=\"fa fa-leaf fa-2x\"><\/i>",
            "<i title=\"Résultats financiers\" class=\"fa fa-area-chart fa-2x\"><\/i>"
        ],
        [
            "<i title=\"Valeur\" class=\"fa fa-money fa-2x\"><\/i>",
            "<i title=\"Identité de l'entreprise\" class=\"fa fa-flask fa-2x\"><\/i>",
            "<i title=\"Retombée d'une campagne\" class=\"fa fa-graduation-cap fa-2x\"><\/i>",
            "<i title=\"Perception des consommateurs\" class=\"fa fa-paw fa-2x\"><\/i>"
        ],
        [
            "<i title=\"Recherches en cours\" class=\"fa fa-gavel fa-spin fa-2x\"><\/i>",
            "<i title=\"Dépots de brevets\" class=\"fa fa-usd fa-2x\"><\/i>",
            "<i title=\"Technologie\" class=\"fa fa-meh-o fa-2x\"><\/i>",
            "<i title=\"Rumeurs\" class=\"fa fa-fighter-jet fa-2x\"><\/i>"
        ],
        [
            "<i title=\"Protection\" class=\"fa fa-child fa-2x\"><\/i>",
            "<i title=\"Comportements des collaborateurs\" class=\"fa fa-clock-o fa-2x\"><\/i>",
            "<i title=\"Vulnérabilité\" class=\"fa fa-bomb fa-2x\"><\/i>",
            "<i title=\"Voyages\" class=\"fa fa-building-o fa-2x\"><\/i>"
        ]
    ];
        
    function init(config)
    {
        var veille = parseInt($("#alerts").attr("veille"))-1;
        
        $.getJSON("../general.json", function(data) {
            $.each( data, function( key, val ) {
                var firstKey = getFirstKey(val);
                var infos = val[firstKey]; // firstKey = timestamp
                nums[infos["veille"]-1]+=1;
                if (infos["veille"]-1 == veille) {
                    var cats = infos["category"];
                    var actives = [];
                    cats.forEach(function(elm, index, array) {
                        if (elm == 1) {
                            actives[index] = categories[veille][index];
                        }
                    });
                    createAlert(firstKey, infos["content"], infos["url"], infos["source"], infos["keywords"], actives);
                }
            });
            

            $(".huge").each(function(key) { $(this).text(nums[key]); });
            //$(".progress-bar").each(function(key) { $(this).css('width', +'1%').attr('aria-valuenow', 1); });
        });
    }
    
    function createAlert(title, content, link, source, keywords, cats)
    {   

        var alert="";
        alert += "          <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">";
        alert += "                <div class=\"panel panel-default\">";
        alert += "                    <div class=\"panel-heading\">";
        alert += "                        <h3>" + getDate(title) + "<\/h3>";
        alert += "                        <p>";

        cats.forEach(function(elm, index, array) {
            alert += elm;
            if (index < array.length-1) alert += " | ";
        });

        alert += "                        <\/p>";
        alert += "                    <\/div>";
        alert += "                    <!-- \/.panel-heading -->";
        alert += "                    <div class=\"panel-body\">";
        alert += "                        <h3 style=\"margin-top:-5px;\"><i title=\"Contenu\" class=\"fa fa-file-text-o\"><\/i><\/h3>";
        alert += "                        <p>" + content + "<\/p>";

        if (link != 'null') {
            alert += "                        <h3><i title=\"Lien\" class=\"fa fa-level-up\"><\/i><\/h3>";
            alert += "                        <p> <a href=\"" + link + "\" target=\"_blank\">" + link + "<\/a> <\/p>";
        }

        alert += "                        <h3><i title=\"Source\" class=\"fa fa-globe\"><\/i><\/h3>";
        alert += "                        <p>" + source + "<\/p>";
        alert += "                        <h3><i title=\"Mot-clés\" class=\"fa fa-key fa-1x\"><\/i><\/h3>";
        alert += "                        <p>" + keywords.replace(" ", ", ") + "<\/p>";
        alert += "                    <\/div>";
        alert += "                <\/div>";
        alert += "                <!-- \/.panel -->";
        alert += "            <\/div>";


        // <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        //     <div class="panel panel-default">
        //         <div class="panel-heading">
        //             <h3>Timestamp</h3>
        //         </div>
        //         <!-- /.panel-heading -->
        //         <div class="panel-body">
        //             <h3 style="margin-top:-5px;"><i title="Contenu" class="fa fa-file-text-o"></i></h3>
        //             <p>RT @mercedesashley: Do not buy a Mercedes Benz at all costs. I have been driving them since I was 18 and I am over it. They (cont) http:\/\/t\u2026</p>
        //             <h3><i title="Lien" class="fa fa-level-up"></i></h3>
        //             <p> <a href="http:\/\/t.co\/X9rA5JOFkB" target="_blank">http:\/\/t.co\/X9rA5JOFkB</a> </p>
        //             <h3><i title="Source" class="fa fa-globe"></i></h3>
        //             <p>Twitter</p>
        //             <h3><i title="Mot-clés" class="fa fa-key fa-1x"></i></h3>
        //             <p>Mercedes, Benz</p>
        //             <h3><i title="Types" class="fa fa-flag"></i></h3>
        //             <p>
        //                 <i title="Stratégies" class="fa fa-diamond"></i> | 
        //                 <i title="Politique tarifaires" class="fa fa-usd"></i> | 
        //                 <i title="Nouveaux produits ou services" class="fa fa-leaf"></i> | 
        //                 <i title="Résultats financiers" class="fa fa-area-chart"></i>
        //             </p>
        //         </div>
        //     </div>
        //     <!-- /.panel -->
        // </div>

        $("#alerts").append(alert);
    }

    function getDate(UNIX_timestamp){
        var a = new Date(UNIX_timestamp*1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ', ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
    }

    return { init : init };

})();


// UTILS //

function getFirstKey( data ) {
      for (elem in data ) 
          return elem;
 }

