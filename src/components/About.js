import React from 'react'

export default function About(props) {
    let myStyle = {
        backgroundColor: props.theme === 'light' ? 'white' : '#181d50',
        color: props.theme === 'light' ? 'black' : 'white',
        border: `0.5px solid ${props.theme === 'light' ? 'black' : 'white'}`
    };
    return (
        <>
            <div className="container my-4 p-4" style={myStyle}>
                <h1 className="my-3">About Us</h1>
                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                <strong>Free to Use!!</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint rem nulla, explicabo culpa fuga laboriosam quisquam saepe eaque id veniam accusantium nostrum eligendi accusamus neque delectus corrupti fugiat quis expedita adipisci harum.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                <strong>Compatible for any device</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga alias cupiditate quas non inventore eveniet, omnis beatae incidunt libero commodi provident nostrum est praesentium placeat aut enim, ipsum tempore reprehenderit fugiat quaerat! Harum tenetur eum corrupti molestias voluptatem iure exercitationem, accusantium itaque provident commodi impedit perferendis! Quasi illo id sunt optio ipsum dolorem libero voluptatum quos illum nihil nisi cupiditate provident ratione aperiam fugit numquam, laudantium necessitatibus mollitia temporibus ducimus atque. Voluptatum eius minus delectus praesentium at ipsa?
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                                <strong>Smooth user experience!!</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non, id veniam vero voluptas architecto nisi doloribus harum fugiat illo odit itaque amet quas et. Ipsam adipisci sint nisi consectetur a quos pariatur cumque exercitationem ducimus earum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti ad esse ex corrupti fugiat, vitae dolorem facere commodi quia. Ab quam accusamus neque deserunt voluptate.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
