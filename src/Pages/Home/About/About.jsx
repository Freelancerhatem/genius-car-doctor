

const About = () => {
    return (
        <div>
            <div className="hero min-h-[80vh] bg-base-200">
                <div className="hero-content flex-col gap-52 lg:flex-row">
                    <div className="relative">
                    <img src="https://shorturl.at/giRWY" className="max-w-xl  rounded-lg shadow-2xl" />
                    <img src="https://shorturl.at/pqDJ6" className="max-w-xs absolute -bottom-20 -right-20 rounded-lg shadow-2xl" />

                    </div>
                    
                    <div>
                        <h1 className="text-5xl font-bold">About us</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-success">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;