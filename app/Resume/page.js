import Link from "next/link";

export default function Page(){

    let personInfo = {
        personName: "Diem",
        personCertificate: "N/A",
        personAge: 23,
        personContact: "403-305-0865",
        personEmail: "diemsalaysay45@gmail.com",
        personAddress: {
            street:"",
            city: "Calgary", 
            province: "Alberta"}
    };

    let{
        personName,
        personCertificate,
        personAge:age,
        personContact:contact,
        personEmail:email,
        personAddress: {city, province}
    } = personInfo;



    return(
        <main>
            <h1>Resume</h1>
            <img src="C:\cprg306\cprg306-project\app\Resume\IMG_0558.jpg"></img>
            <p>Name: {personName}</p>
            <p>Certificate: {personCertificate}</p>
            <p>Age: {age}</p>
            <p>Phone Number: {contact}</p>
            <p>Email: {email}</p>
            <p>{city}, <b>{province}</b></p>

        </main>
    );
}