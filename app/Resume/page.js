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
            province: "Alberta"},
        
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
            <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
            <p className="font-bold text-heading sm:text-4xl text-2xl">Name: {personName}</p>
            <p>Certificate: {personCertificate}</p>
            <p>Age: {age}</p>
            <p>Phone Number: {contact}</p>
            <p className="text-align">Email: {email}</p>
            <p>{city}, <b>{province}</b></p>
            </div>
            <h2>Experience</h2>
            <h2>Software Development at SAIT (2024-2025) </h2>
            <h2>Skills</h2>
            <h2>Database, Object-Oriented Programming, UI/UX, Software Analysis</h2>

        </main>
    );
}