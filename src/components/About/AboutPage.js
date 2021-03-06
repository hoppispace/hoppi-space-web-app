import React from 'react';

const AboutPage = () => {
    return (
        <main id="about-container">
            <div className="container-fluid">
                <section id="mission">
                    <h2 className="alt-header">Our Mission</h2>
                    <p>
                        At Hoppi Space, we believe that every individual should be able to pursue their artistic vision
                        without a lack of space holding them back. Our goal is to transform the traditional avenues of
                        searching for art-friendly venues to be more convenient for today's creative.
                        Implementing a "one-stop shop" approach, we hope to build an experience where users do not only
                        see
                        what is around their area, but what they can quickly reserve and use immediately, gaining more
                        studio time and slashing the time searching for it.
                        Of course, we would not be anything without the studios themselves. We plan on working
                        intimately
                        with owners to give them not only more exposure to their target audience, but a new way to
                        utilize
                        their open time all while increasing traffic and their communities with low-risk.
                        <br/>
                        Moreover, we believe in the importance of growing and cultivating the arts community. As part of
                        our
                        mission, we hope to be able to sponsor a different arts-based charity, school, or non-profit on
                        a
                        monthly or quarterly basis*.
                        Creativity is something that we feel deserves to be consistently supported for building both an
                        expanded personal outlook and well-rounded society. We have many details to work out, but as
                        this is
                        a deeply meaningful part of our work we would love any suggestions.
                    </p>
                </section>

                <section id="our-team">
                    <h2>Our Team</h2>
                    <p>Both of our founders are proud, Class of 2015 UNC Chapel Hill alumni devoted to the cause of
                        making
                        artistic expression accessible for all.</p>
                    <div className="team-member-card">
                        <div className="team-img"/>
                        <div className="team-bio">
                            <p className="member-name">Faith Walker, <span>Co-Founder</span></p>
                            <p className="member-summary">QA Engineer by day, Web Dev and Chief Editor by night. Having
                                earned her B.A. in Computer Science, she is dedicated to the task of creating not only
                                an
                                aesthetically pleasing and user-friendly experience, but also writing stuff you want to
                                read.
                                Engaging material and intriguing design? We'll take it.</p>
                        </div>
                    </div>
                    <div className="team-member-card">
                        <div className="team-img"/>
                        <div className="team-bio">
                            <p className="member-name">Pearl Sortman, <span>Co-Founder</span></p>
                            <p className="member-summary">A Full-stack Developer by trade, Pearl uses her B.A. in
                                Computer
                                Science to turn a small class project into a personal passion.
                                She strives to help create a diverse, global community of creators and bring all
                                telephone
                                pole "Wanted" adds to the digital realm. She's got your back, and our backend.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default AboutPage;
