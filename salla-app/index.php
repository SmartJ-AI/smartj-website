<?php
// إعدادات تطبيق ذكاء الجوهرة
$client_id = 'fca00db5-b78f-4abf-94a8-880fcaea6005'; // حطيت لك رقمك اللي في الصورة
$redirect_uri = 'https://smartjh1.com/salla-app/callback.php'; 

$query = http_build_query([
    'client_id' => $client_id,
    'redirect_uri' => $redirect_uri,
    'response_type' => 'code',
    'scope' => 'offline_access read_orders read_customers', 
]);

$install_url = "https://accounts.salla.sa/oauth2/auth?" . $query;

header("Location: " . $install_url);
exit;
