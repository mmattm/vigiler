<?php
$http_origin = $_SERVER['HTTP_ORIGIN'];
 
if ( strrpos($http_origin, "mysite1.net") || strrpos($http_origin, "mysite2") ){  
    header("Access-Control-Allow-Origin: $http_origin");
}
 
header('Content-Type: application/json');
 
ini_set('display_errors', 1);
require_once('twitter-api-php-master/TwitterAPIExchange.php');
 
/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "47955219-PtyjWvEVx7zwOBRcXlde7VWJ41sErQBkxCg40qII3",
    'oauth_access_token_secret' => "hp2Nxq2o318xKhOVv28pkuNYut0TxzpR5NTAIp3JU3jYi",
    'consumer_key' => "TnqONt6kJYpXasY1H0gvMtRaD",
    'consumer_secret' => "sYoppUwMg1wrKFeiFFzMKkUGafL9AhEwSPaRfeWbesCccZiPr0"
);
 
 
/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/
 
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?'.$_SERVER['QUERY_STRING'];
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
 
$api_response = $twitter ->setGetfield($getfield)
                     ->buildOauth($url, $requestMethod)
                     ->performRequest();
 
echo $api_response;

?>