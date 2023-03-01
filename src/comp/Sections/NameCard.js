import React from 'react';
import "./NameCard.css";

function NameCard() {
    return (
        
    <div className="NameCard">
        <div className="card">
            
            <div className="front side">
                <h1 className="logo">Yushan Wang</h1>
            </div>
            
            <div class="back side">
                <div class="line-numbers">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                </div>
                <code>
                    <span class="function">let </span><span class="variable">me</span><span class="operator">= </span><span class="operator"> &#123; </span>
                    <div class="indent"> <span class="property">name</span><span class="operator">: </span><span class="string">'Yushan Wang'</span><span>,</span></div>
                    <div class="indent"> <span class="property">title</span><span class="operator">: </span><span class="string">'Software Engineer'</span><span>,</span></div>
                    <div class="indent"> <span class="property">Code</span><span class="operator">: 
                        </span><span class="operator" >&#91;</span><span class="array"> "Python" , "JavaScript", "C++", "Matlab", "MySQL"</span><span class="operator">&#93;</span>
                    </div>
                    <div class="indent"> <span class="property">Web</span><span class="operator">: </span>
                            <span class="operator">&#91;</span>
                                <span class="array"> "React" , "Tailwind", "NextJS", 
                                "HTML</span><span class="array">&#47;</span>
                                <span class="array">css</span><span class="array">&#47;</span><span class="array">JS"</span>
                                <span class="operator">&#93;</span>
                    </div>
                    <span class="operator">&#125;</span>
                </code>
            </div>
        </div>
        
    </div>
    );
}

export default NameCard;