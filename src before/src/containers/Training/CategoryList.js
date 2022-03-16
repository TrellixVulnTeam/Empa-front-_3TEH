import React, { Component } from "react";

import axios from "../../axios-connect";
import Header from "../../components/Header/Header";
import CategoryList from "../../components/Training/CategoryList/CategoryList";
import Form from "../../components/Form/Form";

import classes from "./CategoryList.module.scss";

class Training extends Component {
  state = {
    activeIndex: 0,
    categories: [
      {
        id: 0,
        title: "Мэдээлэл технологийн мэргэших сургалтууд",
        icon: "https://th.bing.com/th/id/OIP.UYjjVGzTCQIkgkl1UUefOQHaGe?pid=ImgDet&rs=1",
        brief: "text",
      },
      {
        id: 1,
        title: "Төслийн менежмент",
        icon: "https://th.bing.com/th/id/R.c93c7b03d7b7f638fa8d64061dfc0882?rik=g2s2a%2brWhN5jcw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_207954.png&ehk=unYxVH%2fcXUnPJBoSlEf1nNyPPVWTLvgVI%2fpUfi4nhIA%3d&risl=&pid=ImgRaw&r=0",
        brief: "text",
      },
      {
        id: 2,
        title: "Цахим ажилтан",
        icon: "https://th.bing.com/th/id/OIP.JYr3FcvDwZR4bVz8EW-pJgHaHa?pid=ImgDet&rs=1",
        brief: "text",
      },
      {
        id: 3,
        title: "Шинээр мэргэшүүлэх урт хугацааны сургалт",
        icon: "https://th.bing.com/th/id/R.611ed2f97be3c95e8593751ed4d43b55?rik=MVz%2fjZFES2U6sg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_157699.png&ehk=Welf6ISbB4nxc5Gk2zF9lKDBdgcjFL2qAjvoP3y%2baXA%3d&risl=&pid=ImgRaw&r=0",
        brief: "text",
      },
    ],

    trainings: [
      // {
      //   id: 1,
      //   title: "Microsoft Azure Security Technologies сургалт",
      //   brief: "this is brief",
      //   capacity: 1,
      //   category_id: 0,
      //   price: 750000,
      //   duration: "1week",
      //   imgurl:
      //     "http://ettc.empasoft.mn/wp-content/uploads/2021/09/MicrosoftTeams-image-1.png",
      //   body: "body",
      //   CONSTRAINT: 1,
      //   FOREIGN_KEY: 1,
      //   REFERENCES_training_category: 1,
      // },
      // {
      //   id: 2,
      //   title: "Microsoft Azure Administrator сургалт",
      //   brief: "this is brief",
      //   capacity: 0,
      //   category_id: 0,
      //   price: 750000,
      //   duration: "1week",
      //   imgurl:
      //     "http://ettc.empasoft.mn/wp-content/uploads/2021/09/MicrosoftTeams-image-2.png",
      //   body: "body",
      //   CONSTRAINT: 1,
      //   FOREIGN_KEY: 1,
      //   REFERENCES_training_category: 1,
      // },
      // {
      //   id: 2,
      //   title: "Microsoft 365 Mobility and Security сургалт",
      //   brief: "this is brief",
      //   capacity: 0,
      //   category_id: 0,
      //   price: 750000,
      //   duration: "1week",
      //   imgurl:
      //     "http://ettc.empasoft.mn/wp-content/uploads/2021/09/MicrosoftTeams-image-3.png",
      //   body: "body",
      //   CONSTRAINT: 1,
      //   FOREIGN_KEY: 1,
      //   REFERENCES_training_category: 1,
      // },
      // {
      //   id: 2,
      //   title: "Microsoft365: Security Administration сургалт",
      //   brief: "this is brief",
      //   capacity: 0,
      //   category_id: 0,
      //   price: 750000,
      //   duration: "1week",
      //   imgurl: "http://ettc.empasoft.mn/wp-content/uploads/2018/01/ccnp.jpg",
      //   body: "body",
      //   CONSTRAINT: 1,
      //   FOREIGN_KEY: 1,
      //   REFERENCES_training_category: 1,
      // },
      // {
      //   id: 2,
      //   title: "",
      //   brief: "",
      //   capacity: 0,
      //   category_id: 0,
      //   price: 0,
      //   duration: "",
      //   imgurl: "",
      //   body: "body",
      //   CONSTRAINT: 1,
      //   FOREIGN_KEY: 1,
      //   REFERENCES_training_category: 1,
      // },
      // {
      //   id: 3,
      //   title: "Бизнес шинжээч",
      //   brief:
      //     "Байгууллагын нэгдсэн удирдлагын систем болох Microsoft Active Directory системийн хэрхэн суулгаж тохируулдаг талаар богино хугацаанд системтэй мэдлэг олгох сургалт.",
      //   capacity: 1,
      //   category_id: 1,
      //   price: 557000,
      //   duration: "1week",
      //   imgurl:
      //     "http://ettc.empasoft.mn/wp-content/uploads/2021/05/IT-Project-manager-%D1%81%D1%83%D1%80%D0%B3%D0%B0%D0%BB%D1%82-2.png",
      //   body: "body",
      //   CONSTRAINT: 1,
      //   FOREIGN_KEY: 1,
      //   REFERENCES_training_category: 1,
      // },
      // {
      //   id: 3,
      //   title: "Web Development Basics",
      //   brief: "this is brief",
      //   capacity: 1,
      //   category_id: 1,
      //   price: 120000,
      //   duration: "1week",
      //   imgurl: "http://ettc.empasoft.mn/wp-content/uploads/2020/08/WDB_.png",
      //   body: "body",
      //   CONSTRAINT: 1,
      //   FOREIGN_KEY: 1,
      //   REFERENCES_training_category: 1,
      // },
      // {
      //   id: 4,
      //   title: "Дижитал шилжилт ба мэдээллийн аюулгүй байдлын сургалт",
      //   brief: "this is brief",
      //   capacity: 1,
      //   category_id: 1,
      //   price: 350000,
      //   duration: "1week",
      //   imgurl:
      //     "http://ettc.empasoft.mn/wp-content/uploads/2020/07/Дижитал-шилжилт-ба-мэдээллийн-аюулгүй-байдлын-сургалт.jpg",
      //   body: "body",
      //   CONSTRAINT: 1,
      //   FOREIGN_KEY: 1,
      //   REFERENCES_training_category: 1,
      // },
      // {
      //   id: 4,
      //   title: "Web Developer A-Z",
      //   brief: "this is brief",
      //   capacity: 1,
      //   category_id: 1,
      //   price: 1100000,
      //   duration: "1week",
      //   imgurl:
      //     "http://ettc.empasoft.mn/wp-content/uploads/2021/05/WEB-DEVELOPER.png",
      //   body: "body",
      //   CONSTRAINT: 1,
      //   FOREIGN_KEY: 1,
      //   REFERENCES_training_category: 1,
      // },
      // // {
      // //   id: 2,
      // //   title: "this is title",
      // //   brief: "this is brief",
      // //   capacity: 1,
      // //   price: 25000,
      // //   duration: "1week",
      // //   imgurl: "",
      // //   body: "body",
      // //   // category_id:"2",
      // //   // CONSTRAINT fk_category_id
      // //   //     FOREIGN KEY (category_id)
      // //   //     REFERENCES training_category(id)
      // // },
      //
      //
      //
      //

      {
        id: 1,
        category_id: 0,
        title: "Active Directory",
        price: " 350,000.00 ",
        capacity: 12,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/ad-dns-2016-active-directory-and-domain-control/",
        imgurl: "http://ettc.empasoft.mn/wp-content/uploads/2018/01/ccnp.jpg",
        body: "Cisco сүлжээний төхөөрөмжийг хэрэглэх үед аюулгүй бүтцийг хөгжүүлэх, сүлжээний төхөөрөмжийг хянах, суулгах чадварыг эзэмшихээс гадна аюулгүй байдлыг мэдэх, хяналт тавих талаар мэдлэгийг олж авах болно.",
      },
      {
        id: 2,
        category_id: 0,
        title: "Super Admin /System, Networking, Information security/",
        price: " 500,000.00 ",
        capacity: 21,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/super-admin-system-networking-information-security/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2021/06/MicrosoftTeams-image-4.png",
        body: "Сургалтын зорилго: Mэдээлэл технологийн суурийг илүү цогц хэлбэрээр өгч,  дэд бүтэц серверийг зөв зохион байгуулалттай удирдах арга барилыг эзэмшүүлэн бүх талын мэдлэг, ур чадвартай мэдээлэл технологийн инженерийг бэлтгэхэд оршино. Software болон hardware аль ч чиглэлийн мэдээлэл технологийн инженерүүд хамрагдах боломжтой",
      },
      {
        id: 3,
        category_id: 0,
        title: "Microsoft365 Admin/ Office 365 Admin",
        price: " 150,000.00 ",
        capacity: 2,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/office-365-admin/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2020/04/unnamed-1.png",
        body: "Office 365 хэрэглэгчдйн хэрэглээг нэмэгдүүлэх, удирдах, зохицуулах,  байгууллагын МТ өдөр тутмын үйл ажиллагааг хариуцсан МТ ажилтан, инженерүүдэд зориулсан анхан шатны сургалт.",
      },
      {
        id: 4,
        category_id: 0,
        title: "RHCSA-(Red Hat Certified System Administrator Rapid Track)",
        price: " 1,250,000.00 ",
        capacity: 40,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/red-hat-system-administration-ii/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2017/01/red-hat-administrator.png",
        body: "Энэ сургалт нь Red Hat Enterprise Linux 7 орчинг удирдах гол ур чадвар, мэдлэгийг олгох зорилготой. Үүнд: үндсэн өгөгдөл, хэрэглэгчдийг зохицуулах, нууц үг суулгах зэрэг Linux удирдлагын үндсэн зарчим багтана.",
      },
      {
        id: 5,
        category_id: 0,
        title: "RHCE-(Red Hat Certified System Engineer)",
        price: " 1,750,000.00 ",
        capacity: 40,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/red-hat-system-administration-i-rh124/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2017/01/red-hat-certified-engineer-500x500-1.jpg",
        body: "RHCE сургалт нь Red Hat –ийн ахисан түвшин юм.",
      },
      {
        id: 6,
        category_id: 0,
        title: "CCNP Security-(Cisco Certified Network Professional Security)",
        price: " 1,050,000.00 ",
        capacity: 40,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/cisco-certified-network-professional-ccnp-security/",
        imgurl: "http://ettc.empasoft.mn/wp-content/uploads/2018/01/ccnp.jpg",
        body: "Cisco сүлжээний төхөөрөмжийг хэрэглэх үед аюулгүй бүтцийг хөгжүүлэх, сүлжээний төхөөрөмжийг хянах, суулгах чадварыг эзэмшихээс гадна аюулгүй байдлыг мэдэх, хяналт тавих талаар мэдлэгийг олж авах болно.",
      },
      {
        id: 7,
        category_id: 0,
        title: "CCNP Professional (routing,switching and troubleshooting)",
        price: " 1,500,000.00 ",
        capacity: 40,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/ccnp/",
        imgurl: "http://ettc.empasoft.mn/wp-content/uploads/2018/01/ccnp.jpg",
        body: "Дотоод болон гадаад сүлжээг төлөвлөх, хэрэгжүүлэх, тохируулах, бусад аюулгүй ажиллагаа, утасгүй сүлжээ, видео төхөөрөмж болон тэдгээрийн мэргэжилтнүүдтэй хамтран ажиллахад энэ сургалтын гол зорилго оршино.",
      },
      {
        id: 8,
        category_id: 0,
        title: "CCNA Security",
        price: " 1,100,000.00 ",
        capacity: 40,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/ccna-security/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2018/01/CCNA-Security-210-260-600x338.png",
        body: "Cisco сүлжээний төхөөрөмжийг хэрэглэх үед аюулгүй бүтцийг хөгжүүлэх, сүлжээний төхөөрөмжийг хянах, суулгах чадварыг эзэмшихээс гадна аюулгүй байдлыг мэдэх, хяналт тавих талаар мэдлэгийг олж авах болно.",
      },
      {
        id: 9,
        category_id: 0,
        title: "CCNA Enterprise",
        price: " 1,100,000.00 ",
        capacity: 40,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/cisco-ccna-cisco-certified-network-associate/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2015/10/Screenshot-61.png",
        body: "Энэхүү сургалт нь нийт 40 цаг үргэлжлэх сургалт байна. Сургалтад сууснаар сүлжээний төхөөрөмжүүд ашиглан гүйцэтгэх боломжтой сервисүүд болох DHCP, DNS, NTP, NAT, FHRP-ийн талаарх ойлголттой болж үндсэн тохиргоог хийж сурна. ",
      },
      {
        id: 10,
        category_id: 0,
        title: "Data Analysis-1/with R language/",
        price: " 1,350,000.00 ",
        capacity: 40,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/data-analysis-l/",
        imgurl: "http://ettc.empasoft.mn/wp-content/uploads/2018/09/DA.jpg",
        body: "Өгөгдөл, мэдээлэл дээр анхан шатны шинжилгээ хийх аргуудыг R хэл дээр заах сургалт.",
      },
      {
        id: 11,
        category_id: 0,
        title: "Data Analysis-2",
        price: " 1,650,000.00 ",
        capacity: 40,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/data-analysis-ll/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2018/09/data-analysis-640x427.jpg",
        body: "Applied predictive analytics with R: Сургалтаар machine learning-ийн үндсэн алгоритмууд, аргачлалууд, техникууд мөн бизнест хэрхэн хэрэглэхийг заана.",
      },
      {
        id: 12,
        category_id: 0,
        title: "Microsoft Power BI-1",
        price: " 550,000.00 ",
        capacity: 12,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/microsoft-power-bi-l/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2021/06/Power-BI.jpg",
        body: "Үүлэн технологид суурилсан Microsoft Power BI-ийг ашиглан мэдээлэлд дүн шилгээ хийж, зураглаж, дүгнэлт гаргах чадварыг олж авна.",
      },
      {
        id: 13,
        category_id: 0,
        title: "Analyzing Data with Power BI-2",
        price: " 700,000.00 ",
        capacity: 12,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/analyzing-data-with-power-bi-ll/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2018/01/trudigital-integration-microsoft-power-bi-1080x675.png",
        body: "Үүлэн технологид суурилсан Microsoft Power BI-ийг ашиглан  мэдээлэлд дүн шинжилгээ хийн, дүгнэлт гаргах чадварыг энэ сургалтаас олж авна.",
      },
      {
        id: 14,
        category_id: 0,
        title: "Administering System Center Configuration Manager and Intune",
        price: " 2,750,000.00 ",
        capacity: 40,
        language: "Англи",
        url: "http://ettc.empasoft.mn/course/administering-system-center-configuration-manager-and-intune/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2018/01/Microsoft-Administering-System-Center-Configuration-Manager-M20703-1.png",
        body: "Administering System Center Configuration Manager and Intune сургалт нь Microsoft Intune and Microsoft System Center v1511 хэрэглэж байгаа төхөөрөмжүүдийг удирдах, тохируулахыг заах болно.",
      },
      {
        id: 15,
        category_id: 0,
        title: "Object-Oriented Analysis and Design Using UML Duration Course",
        price: " 2,490,000.00 ",
        capacity: 40,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/object-oriented-analysis-and-design-using-uml-duration-course/",
        imgurl: "http://ettc.empasoft.mn/wp-content/uploads/2018/01/UML-1.jpg",
        body: "Энэ сургалт нь хамгийн сүүлийн үеийн Unified Modeling Language v 2.2 дээр хэрхэн ажиллахыг заах болно",
      },
      {
        id: 16,
        category_id: 0,
        title:
          "Oracle Database  Administration 12c-Admin Install and Upgrade Accelerated",
        price: " 3,700,000.00 ",
        capacity: 40,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/oracle-database-12c-admin-install-and-upgrade-accelerated/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2015/10/empasoft_bagsh.jpg",
        body: "Oracle Database 12c –ийг суулгах, тохируулах, Оракле Датабааз дээр ажиллах, түүнийг  үр дүнтэй зохион байгуулах талаар үндсэн болон гол мэдлэгүүдийг та олж авах болно.",
      },
      {
        id: 17,
        category_id: 0,
        title: "Oracle Fusion Middleware 12c Build Application with ADF",
        price: " 2,650,000.00 ",
        capacity: 40,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/oracle-fusion-middleware-12c-build-applications-with-adf/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2018/01/oracle-logo-1.png",
        body: "Энэ сургалт нь ADF Бизнесийн Бүрэлдэхүүн ашигланADF Faces client бүрэлдэхүүн хэсгүүдийг хэрэглэгчийн интерфейс дээр дахин ашиглагдах бизнесийн үйлчилгээг бий болгохыг танд заана. ",
      },
      {
        id: 18,
        category_id: 0,
        title: "Oracle Weblogic 11g Diagnostic troubleshooting 11g",
        price: " 3,000,000.00 ",
        capacity: 40,
        language: "Англи",
        url: "http://ettc.empasoft.mn/course/oracle-weblogic-11g-diagnostic-troubleshooting-11g/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2018/01/oracle-weblogic-1.png",
        body: "Oracle WebLogic Server 11g -ийн оношлогоо, алдааг олж засварлах арга нь аж ахуйн нэгжийн програмын гүйцэтгэлд нөлөөлдөг серверийн гол асуудлыг шийдэхэд тусалдаг.",
      },
      {
        id: 19,
        category_id: 0,
        title: "EC-Council CEHv11(Certified Ethical Hacker)",
        price: " 3,000,000.00 ",
        capacity: 40,
        language: "Англи",
        url: "http://ettc.empasoft.mn/course/ec-council-certified-ethical-hacker-ceh-v10/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2018/01/CEH-Training.jpg",
        body: "“Хакерыг ялахын тулд хакер шиг сэтгэх хэрэгтэй” гэдэг. Certified Ethical Hacker (CEH) v11 сургалт мэдээллийн аюулгүй байдлыг хангахаар ажиллаж буй таныг мэргэжлийн өндөр түвшинд аваачих дэлхийн хамгийн шилдэг сургалт юм",
      },
      {
        id: 20,
        category_id: 0,
        title: "COBIT5 Foundation ",
        price: " 2,800,000.00 ",
        capacity: 24,
        language: "Англи",
        url: "http://ettc.empasoft.mn/course/cobit5-foundation/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2018/01/cobit5-training1.png",
        body: "Бизнесийн удирдлага болон аж ахуйн нэгжүүдийн IT менежментийн ерөнхий мэдлэг олгох сургалт.",
      },
      {
        id: 21,
        category_id: 0,
        title: "COBIT5 Implementation",
        price: " 2,800,000.00 ",
        capacity: 24,
        language: "Англи",
        url: "http://ettc.empasoft.mn/course/cobit5-implementation/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2018/01/AAIA_wDGAAAAAQAAAAAAAAzEAAAAJGY0MzFmZTk5LTI3YWEtNDBhZC04YTE0LTQzOTI5YTgzOTM3OA.jpg",
        body: "COBIT 5 Implementation сургалт нь байгууллагын бизнесийн нөхцөл байдал, тулгарч буй асуудал, үйл ажиллагаа явуулах, эрсдлийн байдал зэргийг COBIT 5 ашиглан нарийвчлан судлах юм. ",
      },
      {
        id: 22,
        category_id: 0,
        title: "ISACA CISA-(Certified information Systems Auditor)",
        price: " 3,300,000.00 ",
        capacity: 40,
        language: "Англи",
        url: "http://ettc.empasoft.mn/course/isaca-cisa-certified-information-systems-auditor/",
        imgurl: "http://ettc.empasoft.mn/wp-content/uploads/2017/01/CISA-1.jpg",
        body: "Тус сургалт нь мэдээллийн технологийн салбарт дүрэм журам, хяналтын зарчим, арга хэмжээг болон тэдгээрийн бодлогыг боловсруулахад нэн чухал ач холбогдолтой байна.",
      },
      {
        id: 23,
        category_id: 0,
        title: "ISACA CISM-(Certified information Security Manager)",
        price: " 3,300,000.00 ",
        capacity: 40,
        language: "Англи",
        url: "http://ettc.empasoft.mn/course/isaca-cism-certified-information-security-auditor/",
        imgurl: "http://ettc.empasoft.mn/wp-content/uploads/2017/01/CISM.jpg",
        body: "Та мэдээллийн технологийн салбарын аюулгүй байдлаар өөрийн карьерийг өсгөхөөр шийдсэн бол энэ нь таны зайлшгүй сурах сургалт юм.",
      },
      {
        id: 24,
        category_id: 0,
        title: "ITILv4-(Information Technology Infrastructur Library)",
        price: " 2,800,000.00 ",
        capacity: 24,
        language: "Англи",
        url: "http://ettc.empasoft.mn/course/itil-foundation-information-technology-infrastructure-library/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2018/01/ITIL-logo-medium.jpeg",
        body: "Энэ сургалт танд мэдээллийн технологийн сервис, удирдлагын бүтэц, зохион байгуулалт, зарчимын тухай тодорхой мэдлэгийг олгох юм.",
      },
      {
        id: 25,
        category_id: 0,
        title: "Vmware- vsphere optimize scale 6.5",
        price: " 4,400,000.00 ",
        capacity: 40,
        language: "Англи",
        url: "http://ettc.empasoft.mn/course/vmware-data-center-virtualization-vcp5-dcv/",
        imgurl: "http://ettc.empasoft.mn/wp-content/uploads/2017/01/a5-1-1.png",
        body: "Виртуалчлалын хамгийн өргөн тархацтай, чадамж өндөртэй систем болох VMware vSphere системд нарийвчилсан тохиргоо хийх, найдвартай ажиллагааг хэрхэн сайжруулах, хэрхэн өргөтгөх, өөрийн байгууллагын виртуалчлалын системийн байгууллагад тохируулж хэрхэн уян хатан, тусгайлсан тохиргоо хийх болон",
      },
      {
        id: 26,
        category_id: 0,
        title: "CISSP(Certified Information Systems Security Professional)",
        price: " 2,500,000.00 ",
        capacity: 40,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/certified-information-systems-security-professional-cissp/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2019/09/certificate-of-3-1536x865.png",
        body: "Мэдээллийн аюулгүй байдлын менежментээр мэргэшсэн, мэдээллийн аюулгүй байдлын төлөвлөгөө боловсруулж, инженерчлэх,бодлогыг хэрэгжүүлэх, удирдах чиглэлээр ажиллах сонирхолтой хүмүүст зориулсан сургалт. ",
      },
      {
        id: 27,
        category_id: 0,
        title: "TOGAF 9 Certified Architect",
        price: " 750,000.00 ",
        capacity: 40,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/togaf-9-certified-architect/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2021/04/certificate-of-5-1536x865.png",
        body: "TOGAF нь байгууллагын мэдээллийн технологийн архитектурын загварчлал, төлөвлөлт, хөгжүүлэлт, засаглал, удирдлагын аргачлалаар хангадаг, хамгийн өргөн тархсан, хамгийн их хэрэглээтэй мэдээлэл технологийн архитектурын тогтолцоо юм.",
      },
      {
        id: 28,
        category_id: 0,
        title: "Microsoft Windows 10",
        price: " 850,000.00 ",
        capacity: 40,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/microsoft-windows-10/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2020/02/windows-10-1809-features.jpg",
        body: "",
      },
      {
        id: 29,
        category_id: 0,
        title: "Administering Office365 and Hyper AD",
        price: " 750,000.00 ",
        capacity: 30,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/administering-office365-and-hyper-ad/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2017/01/MicrosoftTeams-image-1-1536x1024.jpg",
        body: "Мэдээллийн технологийн салбарын инженерүүдэд Windows Server-ийн хамгийн сүүлийн  хувилбарыг суулгах, тохируулах, удирдан зохион байгуулах чадварыг олгоно.  ",
      },
      {
        id: 30,
        category_id: 0,
        title: "AZ-500T00-A: Microsoft Azure Security Technologies",
        price: " 600,000.00 ",
        capacity: 24,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/icrosoft-azure-security-technologies/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2021/09/MicrosoftTeams-image-3-1536x1024.png",
        body: "Энэхүү сургалтаар та Azure аюулгүйн хяналтуудыг удирдах, хэрэгжүүлэх, Azure аюулгүй байдлыг хянах хэрэглүүрүүдийг ашиглах заавар зэрэг аюулгүй байдлын дээд зэрэглэлийн ухагдахуунуудыг заах болно.",
      },
      {
        id: 31,
        category_id: 0,
        title: "AZ-104T00: Microsoft Azure Administrator",
        price: " 600,000.00 ",
        capacity: 24,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/microsoft-azure-administrator/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2021/09/MicrosoftTeams-image-2-1536x1024.png",
        body: "Сургалтаар та Azure хэрэглэгчдийн хэрэглээг удирдаж, аюулгүй байдлыг ханган, дэд бүтцийг хариуцаж, сүлжээг тохируулан, байгууллагын дотоод сүлжээг клауд орчинтой уялдуулан ажиллуулж сурна.",
      },
      {
        id: 32,
        category_id: 0,
        title: "MS-101T00: Microsoft 365 Mobility and Security",
        price: " 750,000.00 ",
        capacity: 30,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/microsoft365-mobility-and-security/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2021/09/MicrosoftTeams-image-5-1536x1024.png",
        body: "Энэхүү сургалтаар та Microsoft 365  аюулгүй байдлын менежмент, compliance менежмент, төхөөрөмжийн менежментийн талаар судална. Аюулгүй байдлын үйлчилгээний удирдлага, өгөгдөл ба түүнтэй холбоотой бүхий л аюулгүй байдлын талаар сурах болно.",
      },
      {
        id: 33,
        category_id: 0,
        title: "MS-100T00: Microsoft 365 Identity and Services",
        price: " 600,000.00 ",
        capacity: 24,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/microsoft365_security_administration/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2021/09/MicrosoftTeams-image-1-1536x1024.png",
        body: "Энэхүү сургалтаар та Microsoft 365  хэрэглэх үед хэрэглэгчдийг таних, нэвтрүүлэх, гар утасны аюулгүй байдлыг хангах, аюулгүй байдлын хамгаалалтуудыг тохируулах зэрэг агуулгыг үзэх болно.",
      },
      {
        id: 34,
        category_id: 0,
        title: "MS-100T00: Microsoft 365 Identity and Services",
        price: " 750,000.00 ",
        capacity: 30,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/ms365_identity_service/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2021/09/MicrosoftTeams-image-4-1536x1024.png",
        body: "Энэхүү сургалтаар та Microsoft 365 бүтээгдэхүүн үйлчилгээтэй холбоотой зохион байгуулалт, зохион байгуулах үед гарах бүх бүрэлдэхүүн хэсгийг сурах болно. ",
      },
      {
        id: 35,
        category_id: 0,
        title: "MS-030T00-A: Office 365 Administrator",
        price: " 750,000.00 ",
        capacity: 30,
        language: "Монгол",
        url: "",
        imgurl: "",
        body: "",
      },
      {
        id: 36,
        category_id: 0,
        title: "WS-011T00-A: Windows Server 2019 Administration",
        price: " 750,000.00 ",
        capacity: 30,
        language: "Монгол",
        url: "",
        imgurl: "",
        body: "",
      },
      {
        id: 37,
        category_id: 0,
        title: "Planning and Deploying System Center 2012",
        price: " 1,850,000.00 ",
        capacity: 40,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/planning-and-deploying-system-center-2012/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2019/04/optimizing-virtual-desktop-operations-with-sccm-and-login-am.jpg",
        body: "",
      },
      {
        id: 38,
        category_id: 1,
        title: "PRINCE2 Foundation and Practitioner",
        price: " 2,000,000.00 ",
        capacity: 20,
        language: "Англи",
        url: "http://ettc.empasoft.mn/course/prince2-practitioner/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2019/04/optimizing-virtual-desktop-operations-with-sccm-and-login-am.jpg",
        body: "This module explains the System Center 2012 R2 Configuration Manager infrastructure and the typical deployment scenarios.",
      },
      {
        id: 39,
        category_id: 1,
        title: "PRINCE2 Agile FND + PR ",
        price: " 3,000,000.00 ",
        capacity: 40,
        language: "Англи",
        url: "",
        imgurl: "",
        body: "",
      },
      {
        id: 40,
        category_id: 1,
        title: "Agile Scrum Master",
        price: " 2,200,000.00 ",
        capacity: 21,
        language: "Англи",
        url: "http://ettc.empasoft.mn/course/agile-scrum-master/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2021/07/EXIN_Badge_ModuleMaster_AgileScrum-1.png",
        body: "Бүх төрлийн төсөл хэрэгжүүлэхэд тохирсон уян хатан бөгөөд үр дүнтэй арга. Agile Scrum сургалт нь дэлхийн анхны Agile үйлчилгээний удирдлагыг Scrum үйл явцтай хослуулсан хөтөлбөр юм.",
      },
      {
        id: 41,
        category_id: 1,
        title: "IT Project Manager сургалт",
        price: " 620,000.00 ",
        capacity: 40,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/it-project-manager-%d1%81%d1%83%d1%80%d0%b3%d0%b0%d0%bb%d1%82/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2021/03/IT-Project-manager-%D1%81%D1%83%D1%80%D0%B3%D0%B0%D0%BB%D1%82.png",
        body: "Мэдээлэл технологийн төслийн гүйцэтгэл нь удирдаж, чиглүүлж буй менежерийн ур чадвараас ихээхэн хамаардаг. Технологид түшиглэсэн старт апп, том жижиг төслүүд зөвхөн сайн хөгжүүлэгч, IT мэргэжилтэнтэй байгаад амжилт олдоггүй",
      },
      {
        id: 42,
        category_id: 2,
        title: "Microsoft365 End User /Word, Excel, PowerPoint, Outlook/",
        price: " 150,000.00 ",
        capacity: 4,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/microsoft-office-365-end-user/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2017/01/o365Thursday.jpg",
        body: "Өдөр тутмын ажилдаа Office365-ийг үр бүтээлтэй хэрэглэх  хүн бүхэнд зориулсан богино хэмжээний сургалт.",
      },
      {
        id: 43,
        category_id: 2,
        title: "Microsoft365 End User /Teams, SharePoint, OneDrive, Outlook/ ",
        price: " 150,000.00 ",
        capacity: 4,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/microsoft-office-365-end-user/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2017/01/o365Thursday.jpg",
        body: "Өдөр тутмын ажилдаа Office365-ийг үр бүтээлтэй хэрэглэх  хүн бүхэнд зориулсан богино хэмжээний сургалт.",
      },
      {
        id: 44,
        category_id: 2,
        title: "Хэрэглээний программын сургалт",
        price: " 120,000.00 ",
        capacity: 12,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/%d1%85%d1%8d%d1%80%d1%8d%d0%b3%d0%bb%d1%8d%d1%8d%d0%bd%d0%b8%d0%b9-%d0%bf%d1%80%d0%be%d0%b3%d1%80%d0%b0%d0%bc%d1%8b%d0%bd-%d1%81%d1%83%d1%80%d0%b3%d0%b0%d0%bb%d1%82/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2018/12/IT-Project-manager-%D1%81%D1%83%D1%80%D0%B3%D0%B0%D0%BB%D1%82-1.png",
        body: "Энэ сургалт нь байгууллагын өдөр тутам ашиглагдаг Office 365 программыг хэрхэн үр ашигтай ашиглах боломжуудын талаар заана. ",
      },
      {
        id: 45,
        category_id: 2,
        title: "Adobe Photoshop анхан шатны сургалт",
        price: " 150,000.00 ",
        capacity: 8,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/adobe-photoshop/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2021/04/certificate-of-1536x865.png",
        body: "Бид танд растер графикийн Adobe Photoshop програм дээр ажиллаж сурах анхан шатны сургалтаа санал болгож байна. Энэ сургалтад сууснаар та Adobe Photoshop-ийн талаар цэгцтэй, суурь мэдлэгийг олж авах боломжтой. ",
      },
      {
        id: 46,
        category_id: 2,
        title: "Soft Skills",
        price: " 80,000.00 ",
        capacity: "1 хүн",
        language: "Монгол",
        url: "",
        imgurl: "",
        body: "",
      },
      {
        id: 47,
        category_id: 3,
        title: "Web Developer A-Z",
        price: " 1,100,000.00 ",
        capacity: 78,
        language: "Монгол",
        url: "http://ettc.empasoft.mn/course/web-developer-a-z/",
        imgurl:
          "http://ettc.empasoft.mn/wp-content/uploads/2021/05/WEB-DEVELOPER.png",
        body: "Цахим хуудас хөгжүүлэлтийн анхан шатнаас ахисан түвшинд хүртэл сурах боломжийг Web Developer A-Z сургалт танд олгоно.",
      },
      {
        id: 48,
        category_id: 3,
        title: "Програмчлалын хэл/ programmer",
        price: " 1,300,000.00 ",
        capacity: 100,
        language: "Монгол",
        url: "",
        imgurl: "",
        body: "",
      },
      {
        id: 49,
        category_id: 3,
        title: "Data analyst/ Өгөгдлийн шинжээч",
        price: " 3,900,000.00 ",
        capacity: 118,
        language: "Монгол",
        url: "",
        imgurl: "",
        body: "",
      },
      {
        id: 50,
        category_id: 3,
        title: "System engineer",
        price: " 1,100,000.00 ",
        capacity: 78,
        language: "Монгол",
        url: "",
        imgurl: "",
        body: "",
      },
    ],

    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("/training")
      .then((response) => {
        let tmpAllTrainings = [];
        response.data.category.forEach((catItem, catIndex) => {
          let tmpTrainItems = [];
          response.data.training.forEach((trainItem, trainIndex) => {
            if (catItem.id === trainItem.category_id) {
              tmpTrainItems.push(trainItem);
            }
          });
          tmpAllTrainings[catIndex] = [...tmpTrainItems];
        });

        this.setState({
          isLoaded: true,
          categories: [...response.data.category],
          trainings: tmpAllTrainings,
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: false,
          error: error.message,
        });
      });
  }

  onClickHandler = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    let formData = {
      title: "Бүртгүүлэх",
      inputs: [
        {
          label: "Багцын сонголт",
        },
        {
          label: "Таны нэр",
        },
        {
          label: "Имэйл хаяг",
        },
        {
          label: "Утасны дугаар",
        },
        {
          label: "Байгууллагын нэр",
        },
        {
          label: "Имэйл хэрэглэгчийн тоо",
        },
      ],
    };

    let content = null;
    if (true) {
      content = (
        <CategoryList
          categories={this.state.categories}
          trainings={this.state.trainings}
          activeIndex={this.state.activeIndex}
          onClick={(index) => this.onClickHandler(index)}
        />
      );
    }

    return (
      <div className={classes.Service}>
        <Header isHome={false} title={"Сургалт"} bgColor="training" />
        {content}
        <Form title={formData.title} inputs={formData.inputs} />
      </div>
    );
  }
}

export default Training;
