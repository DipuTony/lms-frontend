export default function ApiList() {

    let baseUrl = "https://digitalranchi.in"  // This is Live base url

    // let baseUrl = "http://192.168.29.76:8000"  // This is Local base url
    
    const bearer = localStorage.getItem("token")
    const UserType = localStorage.getItem("UserType")

    const header = {
        headers: {
            Authorization: `Bearer ${bearer}`,
            Accept: 'application/json',
        }
    }

    let ApiList = {
        baseUrl: baseUrl,
        bearerHeader: header,  //bearerHeader is used For Authentication
        userType:UserType, // This is User Type => Super Admin, Center Admin, Teacher and Student
        loginApi: `${baseUrl}/api/auth/login`,
        logOutApi: `${baseUrl}/api/auth/logout`,
        registrationApi: `${baseUrl}/api/student/register`,  //POST

        api_getAllCenterList: `${baseUrl}/api/crud/get-all-centers`,
        api_addNewCenter: `${baseUrl}/api/crud/center`,

        api_getAllCurrentAffairs: `${baseUrl}/api/crud/current-affairs/all-current-affairs`, // POST
        api_AddNewCurrentAffairs: `${baseUrl}/api/crud/current-affairs/store`, // POST
        api_getCurrentAffairsById: `${baseUrl}/api/crud/current-affairs/get-by-id`, // POST
        
        api_getAllCouses: `${baseUrl}/api/crud/courses/get-list`, // POST
        api_AddNewCourse: `${baseUrl}/api/crud/courses/store`, // POST
        
        
        api_getAllStudents: `${baseUrl}/api/student/get-all-students`, // POST

        api_getAllTeachers: `${baseUrl}/api/teacher/get-all-teachers`, // POST
        api_stripePayment: `${baseUrl}/api/payment/stripe-post`, // POST




    }

    return ApiList
}