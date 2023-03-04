import React from 'react';
import "./NameCard.css";

function NameCard() {
    return (
        
    <div className="NameCard">
        <div className="card">
            
            <div className="front side">
                <h1 className="logo">Yushan Wang</h1>
            </div>
            
            <div className="back side">
                <div className="line-numbers">
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
                    <span className="function">let </span><span className="variable">me</span><span className="operator">= </span><span className="operator"> &#123; </span>
                    <div className="indent"> <span className="property">name</span><span className="operator">: </span><span className="string">'Yushan Wang'</span><span>,</span></div>
                    <div className="indent"> <span className="property">title</span><span className="operator">: </span><span className="string">'Software Engineer'</span><span>,</span></div>
                    <div className="indent"> <span className="property">Code</span><span className="operator">: 
                        </span><span className="operator" >&#91;</span><span className="array"> "Python" , "JavaScript", "C++", "Matlab", "MySQL"</span><span className="operator">&#93;</span>
                    </div>
                    <div className="indent"> <span className="property">Web</span><span className="operator">: </span>
                            <span className="operator">&#91;</span>
                                <span className="array"> "React" , "Tailwind", "NextJS", 
                                "HTML</span><span className="array">&#47;</span>
                                <span className="array">css</span><span className="array">&#47;</span><span className="array">JS"</span>
                                <span className="operator">&#93;</span>
                    </div>
                    <span className="operator">&#125;</span>
                </code>
            </div>
        </div>
        
    </div>
    );
}

export default NameCard;