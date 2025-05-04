import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

// CSS importálása (feltételezve, hogy a src/assets/css alatt vannak)
import "../assets/css/bootstrap.css";
import "../assets/css/animate.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/stroke-gap-icon.css";
import "../assets/css/bilogica-icon.css";
import "../assets/css/slick.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/jquery.datetimepicker.min.css";
import "../assets/css/nice-select.css";
import "../assets/css/lightcase.css";
import "../assets/css/preset.css";
import "../assets/css/ignore_for_wp.css";
import "../assets/css/theme.css";
import "../assets/css/responsive.css";

const KertOldal = () => {
    const { slug } = useParams();
    const location = useLocation();
    const { kert, selectedVegetables } = location.state || {};

    useEffect(() => {
        if (kert && selectedVegetables) {
            axios.post("/api/kert-adatok", {
                kert,
                zoldsegek: selectedVegetables
            }).then(() => {
                console.log("Adatok elmentve");
            }).catch((error) => {
                console.error("Hiba az adatmentéskor:", error);
            });
        }
    }, [kert, selectedVegetables]);

    return (
        <div>
            {/* Topbar */}
            <section className="topbar03">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tbWrapper">
                                <div className="row">
                                    <div className="col-md-4">
                                        <p>
                                            Üdvözöljük a MyFarm {kert || "Balatonberény"} <span>információs</span> weboldalán!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slider */}
            <section className="slider-section-03">
                <div id="hsindicators" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={`../assets/images/slider/main.jpg`}
                                className="d-block w-100"
                                alt="zöldség"
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className="animated">Vegyszermentes zöldségek az asztalodon</h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src={`../assets/images/slider/fusti.JPG`}
                                className="d-block w-100"
                                alt="füstölt"
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Háztáji füstölt áru</h2>
                            </div>
                        </div>
                    </div>
                    <ol className="carousel-indicators">
                        <li data-target="#hsindicators" data-slide-to="0" className="active">
                            <img src={`../assets/images/slider/main.jpg`} alt="zöldség" />
                        </li>
                        <li data-target="#hsindicators" data-slide-to="1">
                            <img src={`../assets/images/slider/fusti.JPG`} alt="füstölt" />
                        </li>
                    </ol>
                </div>
            </section>

            {/* Offer */}
            <section className="offerSection04">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="secTitle">
                                Offer 100% <span>Fresh Organic</span> Food
                            </h2>
                            <p className="secDesc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua...
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="lookBookItem lbo1hm2">
                                <div className="off">-35% Off</div>
                                <h4>
                                    Fresh vegetable <br />Fruit basket
                                </h4>
                                <p>Aliquam pretium tellus vel sem cond</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Section – a kiválasztott zöldségek dinamikus megjelenítésével */}
            <section className="productSection02">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="secTitle">
                                Mi van a <span>kosaradban?</span>
                            </h2>
                            <p className="secDesc">Az alábbi zöldségeket választottad:</p>
                        </div>
                    </div>
                    <div className="row">
                        {selectedVegetables?.map((veg, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="productItem06">
                                    <div className="pThumb">
                                        <img src={`../assets/images/product/${index + 1}.png`} alt={veg} />
                                    </div>
                                    <div className="p_content">
                                        <h4 className="p-title">{veg}</h4>
                                        <p>Friss, helyi termelőtől</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="teamSecion01">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="secTitle">
                                A {kert || "hartai"} kert <span>vezető </span>kertésze
                            </h2>
                            <p className="secDesc mb55">
                                Aliquam pretium tellus vel sem condimentum faucibus. Curabitur egestas pellentesque
                                felis <br /> ut vehicula. Cras faucibus purus sed risus
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item-01">
                                <div className="tm-thumb">
                                    <img src={`../assets/images/team/1.png`} alt="kertész" />
                                </div>
                                <div className="tm-content">
                                    <h5>Kövesdi Sándor</h5>
                                    <p>Őstermelő</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Top */}
            <a href="#top" id="backtotop">
                <i className="nss-arrow-to-top1"></i>
            </a>
        </div>
    );
};

export default KertOldal;
