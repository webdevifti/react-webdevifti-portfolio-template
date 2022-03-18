import React from 'react';

const SkillsItems = () => {
    const skillsData = [
        {
            id: 1,
            skillName: "HTML",
            skillPercentage: "95%"
        },
        {
            id: 2,
            skillName: "CSS",
            skillPercentage: "92%"
        },
        {
            id: 3,
            skillName: "Javascript",
            skillPercentage: "85%"
        },
        {
            id: 4,
            skillName: "React JS",
            skillPercentage: "70%",
        },
        {
            id: 5,
            skillName: "PHP",
            skillPercentage: "78%"
        },
        {
            id: 6,
            skillName: "Wordpress",
            skillPercentage: "70%"
        }
    ]
    return (
        <div className="skill-progress">
            { skillsData.map((data) => {
                return (
                    <div className="" key={data.id}>
                        <label htmlFor="">{data.skillName} ( {data.skillPercentage} )</label>
                        <div className="skill">
                            <span style={{ width: `${data.skillPercentage}`, }}></span>
                        </div>
                    </div>
                )
            }) }
        </div>
    )
}

export default SkillsItems
