import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import Footer from "../LandingPage/Footer"
import CouresHeader from "./CouresHeader"
import CourseContent from "./CourseContent"


function CourseDetailsIndex() {

  // THIS CODE MAKE THE SCROLL TOP WHEN LINK IS CLICKED
  useEffect(() => {window.scrollTo(0,0) }, [])
  

  const { courseName, courseId } = useParams()

  // const [courseDetails, setCourseDetails] = useState({}); //Toggle when live
  // STATE CONTAINER VARIABLE TO CONTROL TOGGLE OF STIKY PRICE CARD 
  const [stickyShow, setstickyShow] = useState(false)

  // useEffect(() => {  //Toggle when live
  //   axios.get('/api/course-details')
  //     .then(response => {
  //       setCourseDetails(response.data);
  //     })
  //     .catch(error => {
  //       console.log('error')
  //     });
  // }, []);

  //THIS CODE BLOCK IS TO TOGGLE HIDE AND SHOW OF STICKY PRICE CARD VIA WINDOW SCROLL
  window.onscroll = function () {
    if (window.pageYOffset < 200) {
      setstickyShow(false)
    }
    if (window.pageYOffset > 200) {
      setstickyShow(true)

    }
  };


  const courseDetails = {
    courseTitle: 'Learn Python: The Complete Python Programming Course',
    courseDescription: 'Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!',
    author: 'Avinash Jain, The Codex',
    ratings: 2245,
    students: 24144,
    contentBrief: ['Create their own Python Programs', 'Become an experienced Python Programmer', 'Parse the Web and Create their own Games'],
    contents: [
      {
        contentTitle: 'Up and Running with Python',
        contentTime: '4 lectures . 6min',
        contentList: [
          { contentHeading: 'Installing Python', contentDuration: '04:07' },
          { contentHeading: 'Hello World', contentDuration: '01:07' },
        ]
      },
      {
        contentTitle: 'The Basics (Data Types)',
        contentTime: '4 lectures . 6min',
        contentList: [
          { contentHeading: 'Installing Python', contentDuration: '04:07' },
          { contentHeading: 'Hello World', contentDuration: '01:07' },
        ]
      },
      {
        contentTitle: 'Conditions and Loops',
        contentTime: '4 lectures . 6min',
        contentList: [
          { contentHeading: 'Installing Python', contentDuration: '04:07' },
          { contentHeading: 'Hello World', contentDuration: '01:07' },
        ]
      },
    ],
    requirements: ['Macintosh (OSX)/ Windows(Vista and higher) Machine', 'Internet Connection'],
    description: {
      descriptionTitle: 'Do you want to become a programmer? Do you want to learn how to create games, automate your browser, visualize data, and much more?',
      descriptionText: 'If you’re looking to learn Python for the very first time or need'
    },
    instructor: {
      iName: 'Avinash Jain',
      iDesignation: 'CEO of TheCodex.me - Teaching 500,000+ Students how to code',
      iRating: '4.3',
      iReviews: '76,398',
      iStudents: '929,579',
      iCourses: '16',
      iDescription: 'Avinash Jain is currently a senior at UC Berkeley majoring in Electrical Engineering and Computer Science.'
    },
    commentContent: {
      cRating: '4.3',
      cRatingCount: '4k',
      cRatings: [
        { name: 'Seema S.', starRatings: '5', createdAt: 'a week ago', comment: 'Yes it was a good match and gave me a very broad overview of introduction to python' },
        { name: 'Seema S.', starRatings: '5', createdAt: 'a week ago', comment: 'Yes it was a good match and gave me a very broad overview of introduction to python' },
        { name: 'Seema S.', starRatings: '5', createdAt: 'a week ago', comment: 'Yes it was a good match and gave me a very broad overview of introduction to python' },
      ]
    },
    moreCourses: [
      { id: 1, courseName: 'python', title: "Learn Python: The Complete Python.", author: 'Avinash Jain, The Codex', ratings: 450, price: 4254 },
      { id: 2, courseName: 'python', title: "Learn Python: The Complete Python.", author: 'Avinash Jain, The Codex', ratings: 450, price: 4254 },
      { id: 3, courseName: 'python', title: "Learn Python: The Complete Python.", author: 'Avinash Jain, The Codex', ratings: 450, price: 4254 },
      { id: 4, courseName: 'python', title: "Learn Python: The Complete Python.", author: 'Avinash Jain, The Codex', ratings: 450, price: 4254 },
      { id: 5, courseName: 'python', title: "Learn Python: The Complete Python.", author: 'Avinash Jain, The Codex', ratings: 450, price: 4254 },
      { id: 6, courseName: 'python', title: "Learn Python: The Complete Python.", author: 'Avinash Jain, The Codex', ratings: 450, price: 4254 },
    ],
    priceCard: {
      price: 4999,
      imgPath: './pc.jfif',
      vidRating: '4.3 Instructor Rating',
      vidArticle: '1 article',
      vidDownloads: '3 downloadable resources',
      vidLimit: 'Full lifetime access',
      vidAccess: 'Access on mobile and TV',
      vidCertificate: 'Certificate of completion'

    }
  }



  return (
    <>
      <div>
        <CouresHeader courseDetails={courseDetails} stickyShow={stickyShow} />

        {/* SPACER */}
        <div className="w-full h-10"></div>
        <CourseContent courseDetails={courseDetails} />

        {/* SPACER */}
        <div className="w-full h-20"></div>
        {/* <Footer /> */}

      </div>
    </>
  )
}

export default CourseDetailsIndex