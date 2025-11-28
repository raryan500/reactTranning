const Home = () => {
    return (
        <div id="carouselExampleCaptions"
            className="carousel slide"
            style={{ height: "90vh" }}>

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
            </div>

            <div className="carousel-inner" style={{ height: "100%" }}>

                <div className="carousel-item active" style={{ height: "100%" }}>
                    <img
                        src="https://images.gizbot.com/webp/img/2022/08/whatsapp-group-chats-show-participants-dp-1661505507.jpg"
                        className="d-block w-100"
                        style={{ height: "100%", objectFit: "cover" }}
                        alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Group Chat</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>

                <div className="carousel-item" style={{ height: "100%" }}>
                    <img
                        src="https://static0.anpoimages.com/wordpress/wp-content/uploads/2022/09/whatsapp-ap-hero.jpg?&fit=crop&w=1600&h=900"
                        className="d-block w-100"
                        style={{ height: "100%", objectFit: "cover" }}
                        alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Private Chat</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>

                <div className="carousel-item" style={{ height: "100%" }}>
                    <img
                        src="https://c8.alamy.com/comp/2BTP4WX/new-york-usa-25-may-2020-whatsapp-cross-platform-messaging-and-voice-over-service-group-of-business-people-chat-on-mobile-phone-and-laptop-compan-2BTP4WX.jpg"
                        className="d-block w-100"
                        style={{ height: "100%", objectFit: "cover" }}
                        alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Public Chat</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>

        </div>
    );
};

export default Home;
