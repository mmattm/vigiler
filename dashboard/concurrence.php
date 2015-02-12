<?php
include 'header.php';
?>

        <div id="page-wrapper">

            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Concurrence</h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>

            <!-- /.row -->
            <div id="alerts" veille="1" class="row">
                
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3>Timestamp</h3>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <h3 style="margin-top:-5px;"><i title="Contenu" class="fa fa-file-text-o"></i></h3>
                            <p>RT @mercedesashley: Do not buy a Mercedes Benz at all costs. I have been driving them since I was 18 and I am over it. They (cont) http:\/\/t\u2026</p>
                            <h3><i title="Lien" class="fa fa-level-up"></i></h3>
                            <p> <a href="http:\/\/t.co\/X9rA5JOFkB" target="_blank">http:\/\/t.co\/X9rA5JOFkB</a> </p>
                            <h3><i title="Source" class="fa fa-globe"></i></h3>
                            <p>Twitter</p>
                            <h3><i title="Mot-clés" class="fa fa-key fa-1x"></i></h3>
                            <p>Mercedes, Benz</p>
                            <h3><i title="Types" class="fa fa-flag"></i></h3>
                            <p>
                                <i title="Stratégies" class="fa fa-diamond"></i> | 
                                <i title="Politique tarifaires" class="fa fa-usd"></i> | 
                                <i title="Nouveaux produits ou services" class="fa fa-leaf"></i> | 
                                <i title="Résultats financiers" class="fa fa-area-chart"></i>
                            </p>
                        </div>
                    </div>
                    <!-- /.panel -->
                </div>
                
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Alert 2
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <div class="flot-chart-content" id="flot-line-chart-multi"></div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Alert 3
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <div class="flot-chart-content" id="flot-line-chart-moving"></div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Alert 4
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <div class="flot-chart-content" id="flot-bar-chart"></div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Alert 4
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <div class="flot-chart">
                                <div class="flot-chart-content" id="flot-bar-chart"></div>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>  
                <!-- /.col-lg-6 -->

            </div>
            <!-- /.row -->

        </div>
        <!-- /#page-wrapper -->

<?php
include 'footer.php';
?>
