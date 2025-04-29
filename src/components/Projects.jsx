import React from "react"
import expense_tracker from "../assets/expense_tracker.jpg"

const Projects = () => {
    return (
        <div>

        <div>
            <div>
                <p>Projects</p>
                <p>Check out some of my work right here</p>
            </div>

            <div>
                <div>
                    <img src={expense_tracker} alt="" />
                    <div>
                        <button>Demo</button>
                        <button>Code</button>
                    </div>
                </div>
            </div>
        </div>

   
        
        </div>
    )
}

export default Projects