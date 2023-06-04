document.getElementById("submit").onclick = () => {

    let STDNT_AGE = document.getElementById("STDNT_AGE").value;
    let STDNT_GENDER = document.getElementById("STDNT_GENDER").value;
    let STDNT_BACKGROUND = document.getElementById("STDNT_BACKGROUND").value;
    let IN_STATE_FLAG = document.getElementById("IN_STATE_FLAG").value;
    let INTERNATIONAL_STS = document.getElementById("INTERNATIONAL_STS").value;
    let STDNT_MAJOR = document.getElementById("STDNT_MAJOR").value;
    let STDNT_TEST_ENTRANCE_COMB = document.getElementById("STDNT_TEST_ENTRANCE_COMB").value;
    let FIRST_TERM = document.getElementById("FIRST_TERM").value;
    let HOUSING_STS = document.getElementById("HOUSING_STS").value;
    let DISTANCE_FROM_HOME = document.getElementById("DISTANCE_FROM_HOME").value;
    let HIGH_SCHL_GPA = document.getElementById("HIGH_SCHL_GPA").value;
    let HIGH_SCHL_NAME = document.getElementById("HIGH_SCHL_NAME").value;
    let FATHER_HI_EDU_DESC = document.getElementById("FATHER_HI_EDU_DESC").value;
    let MOTHER_HI_EDU_DESC = document.getElementById("MOTHER_HI_EDU_DESC").value;
    let DEGREE_GROUP_DESC = document.getElementById("DEGREE_GROUP_DESC").value;
    let FIRST_TERM_ATTEMPT_HRS = document.getElementById("FIRST_TERM_ATTEMPT_HRS").value;
    let SECOND_TERM_ATTEMPT_HRS = document.getElementById("SECOND_TERM_ATTEMPT_HRS").value;
    let COST_OF_ATTEND = document.getElementById("COST_OF_ATTEND").value;
    let EST_FAM_CONTRIBUTION = document.getElementById("EST_FAM_CONTRIBUTION").value;
    let UNMET_NEED = document.getElementById("UNMET_NEED").value;
    let First_term_backlog_hrs = document.getElementById("First_term_backlog_hrs").value;
    let Second_term_backlog_hrs = document.getElementById("Second_term_backlog_hrs").value;
    let No_sub_first_term = document.getElementById("No_sub_first_term").value;
    let No_sub_second_term = document.getElementById("No_sub_second_term").value;

    let resultElement = document.getElementById("result");

    let data = {
        STDNT_AGE: parseInt(STDNT_AGE),
        STDNT_GENDER: STDNT_GENDER,
        STDNT_BACKGROUND: STDNT_BACKGROUND,
        IN_STATE_FLAG: IN_STATE_FLAG,
        INTERNATIONAL_STS: INTERNATIONAL_STS,
        STDNT_MAJOR: STDNT_MAJOR,
        STDNT_TEST_ENTRANCE_COMB: parseFloat(STDNT_TEST_ENTRANCE_COMB),
        FIRST_TERM: parseInt(FIRST_TERM),
        HOUSING_STS: HOUSING_STS,
        DISTANCE_FROM_HOME: parseFloat(DISTANCE_FROM_HOME),
        HIGH_SCHL_GPA: parseFloat(HIGH_SCHL_GPA),
        HIGH_SCHL_NAME: HIGH_SCHL_NAME,
        FATHER_HI_EDU_DESC: FATHER_HI_EDU_DESC,
        MOTHER_HI_EDU_DESC: MOTHER_HI_EDU_DESC,
        DEGREE_GROUP_DESC: DEGREE_GROUP_DESC,
        FIRST_TERM_ATTEMPT_HRS: parseInt(FIRST_TERM_ATTEMPT_HRS),
        SECOND_TERM_ATTEMPT_HRS: parseInt(SECOND_TERM_ATTEMPT_HRS),
        COST_OF_ATTEND: parseInt(COST_OF_ATTEND),
        EST_FAM_CONTRIBUTION: parseInt(EST_FAM_CONTRIBUTION),
        UNMET_NEED: parseFloat(UNMET_NEED),
        First_term_backlog_hrs: parseInt(First_term_backlog_hrs),
        Second_term_backlog_hrs: parseFloat(Second_term_backlog_hrs),
        No_sub_first_term: parseInt(No_sub_first_term),
        No_sub_second_term: parseInt(No_sub_second_term)
    };

    console.log(data);

    let api_data = {
        data: [data]
    }

    const jsonString = JSON.stringify(api_data);
    fetch("/api/endpoint", {
        method: "POST",
        body: jsonString,
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.text())
    .then((data) => {
        const parsedObject = JSON.parse(data);
        const jsonObject = JSON.parse(parsedObject);
        const value = jsonObject.result[0];
        console.log(value);
        if(value){
            resultElement.innerHTML = "Kết quả dự báo: Sinh viên có khả năng bỏ học.";
        }else{
            resultElement.innerHTML = "Kết quả dự báo: Sinh viên có khả năng không bỏ học."
        }
    })
    .catch((error) => {
        console.error(error);
    });
}