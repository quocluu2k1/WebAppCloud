package com.example.WebAppDemo.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MyApiClient {

    @Value("${spring.azure-ml.model-name}")
    private String modelName;

    @Value("${spring.azure-ml.api-key}")
    private String apiKey;

    @Value("${spring.azure-ml.url-endpoint}")
    private String urlEndpoint;

    public String callApi(String requestBody) {
        // Tạo headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer "+apiKey);
        headers.set("azureml-model-deployment", modelName);

        // Tạo body
        //String requestBody = "{\"data\":[{\"STDNT_AGE\": 18,\"STDNT_GENDER\": \"F\",\"STDNT_BACKGROUND\": \"BGD 1\",\"IN_STATE_FLAG\": \"Y\",\"INTERNATIONAL_STS\": \"N\",\"STDNT_MAJOR\": \"Undeclared\",\"STDNT_TEST_ENTRANCE_COMB\": 1150.0,\"FIRST_TERM\": 200708,\"HOUSING_STS\": \"On Campus\",\"DISTANCE_FROM_HOME\": 150.0,\"HIGH_SCHL_GPA\": 4.0,\"HIGH_SCHL_NAME\": \"SCHOOL 50\",\"FATHER_HI_EDU_DESC\": \"No Information\",\"MOTHER_HI_EDU_DESC\": \"No Information\",\"DEGREE_GROUP_DESC\": \"Bachelors\",\"FIRST_TERM_ATTEMPT_HRS\": 16,\"SECOND_TERM_ATTEMPT_HRS\": 14,\"COST_OF_ATTEND\": 0,\"EST_FAM_CONTRIBUTION\": 0,\"UNMET_NEED\": 0.0,\"First_term_backlog_hrs\": 0,\"Second_term_backlog_hrs\": 0,\"No_sub_first_term\": 4,\"No_sub_second_term\": 4}, {\"STDNT_AGE\": 19,\"STDNT_GENDER\": \"F\",\"STDNT_BACKGROUND\": \"BGD 1\",\"IN_STATE_FLAG\": \"N\",\"INTERNATIONAL_STS\": \"N\",\"STDNT_MAJOR\": \"Undeclared\",\"STDNT_TEST_ENTRANCE_COMB\": 1190.0,\"FIRST_TERM\": 200808,\"HOUSING_STS\": \"Off Campus\",\"DISTANCE_FROM_HOME\": 69.0,\"HIGH_SCHL_GPA\": 2.89,\"HIGH_SCHL_NAME\": \"SCHOOL 389\",\"FATHER_HI_EDU_DESC\": \"College/Beyond\",\"MOTHER_HI_EDU_DESC\": \"College/Beyond\",\"DEGREE_GROUP_DESC\": \"Bachelors\",\"FIRST_TERM_ATTEMPT_HRS\": 18,\"SECOND_TERM_ATTEMPT_HRS\": 18,\"COST_OF_ATTEND\": 1355760,\"EST_FAM_CONTRIBUTION\": 785760,\"UNMET_NEED\": 459300.0,\"First_term_backlog_hrs\": 0,\"Second_term_backlog_hrs\": 0,\"No_sub_first_term\": 6,\"No_sub_second_term\": 2}]}";

        // Tạo HttpEntity từ headers và body
        HttpEntity<String> requestEntity = new HttpEntity<>(requestBody, headers);

        // Tạo RestTemplate
        RestTemplate restTemplate = new RestTemplate();

        // Gửi yêu cầu HTTP POST đến API
        ResponseEntity<String> responseEntity = restTemplate.exchange(urlEndpoint
                , HttpMethod.POST, requestEntity, String.class);

        // Lấy kết quả trả về từ API
        String responseBody = responseEntity.getBody();

        return responseBody;
    }
}
