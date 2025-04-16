"use client"
export default function Home(){
    return (
        <>
            <>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap" rel="stylesheet"/>
            </>
            <>
                <div id="menu">
                    <ul id = "container">
                        <li id="box">About</li>
                        <li id="box">Info
                            <ul id = "dropdown">
                                <li id="box2">What is Pregnancy?</li>
                                <li id="box2">Transmitted Diseases</li>
                                <li id="box2">Methods of Contraception</li>
                            </ul>
                        </li>

                        <li id="box">Resources
                        <ul id = "dropdown">
                                <li id="box2">Sexual Violence and Abuse</li>
                                <li id="box2">Pregnancy and Childbirth Care</li>
                                <li id="box2">Infertility</li>
                            </ul>
                        </li>
                        <li id="box">Legal</li>
                    </ul>
                </div>

                <div id="intro">
                    <div id="title">
                        Empowering Women <br/>Through Knowledge <br/>& Care
                    </div>

                    <div id="news_box">
                        
                    </div>
                </div>
            </>
        </>
    )
}