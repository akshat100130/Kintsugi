import React, { Component } from 'react';
import '../../css/sectionThree.css';
import blogs from '../../images/sections/blogs.png'
import video from '../../images/sections/video.png'
import tips from '../../images/sections/tips.png'

export default class SectionThree extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <section id="mkc3">
        <h1>Resources</h1>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={blogs} class="card-img-top" alt="Blogs"/>
                        <div class="card-body">
                            <h5 class="card-title">Blogs</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={video} class="card-img-top" alt="Video"/>
                        <div class="card-body">
                            <h5 class="card-title">Video</h5>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={tips} class="card-img-top" alt="Tips"/>
                        <div class="card-body">
                            <h5 class="card-title">Tips</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
    }
}