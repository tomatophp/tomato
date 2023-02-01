<?php


return [
    "defaults" => [
        "guard" => "web",
    ],
    "custom" => [
        "admin" => [
            "admin",
            "admin.lang",
            "admin.profile.edit",
            "admin.profile.update",
            "admin.profile.password",
            "admin.verification.notice",
            "admin.verification.verify",
            "admin.password.confirm",
            "admin.password.confirm.post",
            "admin.password.update",
            "admin.logout",
        ]
    ],
    'developer_password' => env('DEVELOPER_PASSWORD', "QTS@2022"),
];
