import React, { Component } from 'react';
import '../../css/sectionFour.css';
import blogs from '../../images/sections/blogs.png'
import video from '../../images/sections/video.png'
import tips from '../../images/sections/tips.png'

export default class SectionFour extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <section id="mkc4">
            <h1>Upcoming Events</h1>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <img src={blogs} class="card-img-top def" alt="Blogs"/>
                            <div class="card-body">
                                <h5 class="card-title">Heading 1</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="high">Read More</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={video} class="card-img-top" alt="Video"/>
                            <div class="card-body">
                                <h5 class="card-title">Heading 2</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="high">Read More</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src={tips} class="card-img-top" alt="Tips"/>
                            <div class="card-body">
                                <h5 class="card-title">Heading 3</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="high">Read More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}