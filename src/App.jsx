import { useLayoutEffect, useRef } from "react";
import "./App.css";
import relogioPretoImg from "./assets/relogio-preto.svg";
import relogioRoseImg from "./assets/relogio-rose.svg";
import relogioUltraImg from "./assets/relogio-ultra.svg";
import relogio2 from "./assets/relogio2.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const element = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".relogio", {
      x: 0,
      opacity: 1,
      rotate: "0deg",
      scrollTrigger: {
        trigger: ".items",
        //markers:true,
        start: "top 400px",
        end: "bottom 200px",
        scrub: true,
      },
    });
    return () => gsap.killTweensOf(".relogio");
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".models-item",
          //markers: true,
          scrub: true,
          start:"top 800x",
          end:"bottom 960px"
        },
      })
      .fromTo("#model-1",{
        opacity:0,
        y:160
      },{
        opacity:1,
        y:0
      })
      .fromTo("#model-2",{
        opacity:0,
        y:160
      },{
        opacity:1,
        y:0
      })
      .fromTo("#model-3",{
        opacity:0,
        y:160
      },{
        opacity:1,
        y:0
      })
    }, element);

    return () => {
      gsap.killTweensOf(".models-item");
    };
  }, []);

  return (
    <div className="container">
      <div className="area-model">
        <h1>ITEM 1</h1>
      </div>
      <div className="area-model">
        <h1>ITEM 2</h1>
      </div>

      <section className="items">
        <div className="items-content">
          <img className="relogio" src={relogio2} alt="Relogio AppleWatch" />
        </div>
      </section>

      <section className="models-container" ref={element}>
        <h2 className="title">Qual é o Apple Watch ideal para você?</h2>

        <div className="models-content">
          <div className="models-item" id="model-1">
            <img src={relogioPretoImg} alt="Relogio Preto" />
            <span className="models-tag">Novo</span>
            <h4 className="models-title">Apple Watch Series 8</h4>
            <p className="models-description">
              A partir de <strong>R$ 5.299</strong>
            </p>
          </div>

          <div className="models-item" id="model-2">
            <img src={relogioRoseImg} alt="Relogio Rose" />
            <span className="models-tag">Novo</span>
            <h4 className="models-title">Apple Watch SE</h4>
            <p className="models-description">
              A partir de <strong>R$ 3.399</strong>
            </p>
          </div>

          <div className="models-item" id="model-3">
            <img src={relogioUltraImg} alt="Relogio Ultra" />
            <span className="models-tag">Novo</span>
            <h4 className="models-title">Apple Watch Ultra</h4>
            <p className="models-description">
              A partir de <strong>R$ 10.299</strong>
            </p>
          </div>
        </div>
      </section>

      <div className="area-model">
        <h1>ITEM 3</h1>
      </div>

      <div className="area-model">
        <h1>ITEM 4</h1>
      </div>
    </div>
  );
}

export default App;
