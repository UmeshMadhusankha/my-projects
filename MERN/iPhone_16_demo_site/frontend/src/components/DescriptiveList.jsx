import React from 'react'

function DescriptiveList({ data }) {

    const output = data.map((row , index)=> {
        return (
                    <dl key={index} style={{ 
                        color: 'whitesmoke',
                        fontSize: '110%'
                     }}>
                        <dt style={{
                            fontSize: '130%',
                            fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
                        }}>
                            <div style={{
                                height: '10px',
                                width: '10px',
                                display: 'inline-block',
                                backgroundColor: 'whitesmoke',
                                borderRadius: '50%',
                            }}></div>
                            <span> </span>
                            {row.feature}</dt>
                        <dd style={{
                            padding: '5px',
                        }}>{row.explanation}
                        </dd>
                    </dl>
                )
    }) 

    return (
        <div>
            {output}
        </div>
    )
}

export default DescriptiveList