package com.example.WebAppDemo.controller;

import com.example.WebAppDemo.services.MyApiClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ApiController {

    @Autowired
    MyApiClient myApiClient;

    @PostMapping("/endpoint")
    public String handleJsonData(@RequestBody String jsonData) {
        return myApiClient.callApi(jsonData);
    }
}
