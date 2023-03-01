import React from "react";
import  "./test.css";
import { ReactComponent as Test } from "./test.svg";

function TestIcon (){
    return (
        <div>
            <a class="animated-arrow" href="https://google.com">
                <span class="the-arrow -left">
                <span class="shaft"></span>
                </span>
                <span class="main">
                <span class="text">
                    Discover the Agency
                </span>
                <span class="the-arrow -right">
                    <span class="shaft"></span>
                </span>
                </span>
            </a>
        </div>
    )
}

function TestPage(){
    return (
        <div >
			<Test />
            <TestIcon />
        </div>
    );
}


export default TestPage;
