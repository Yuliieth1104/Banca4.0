import React, {useRef} from "react";
import img1 from './../Img/Imagen1.png';
import img2 from './../Img/Imagen2.png';
import img3 from './../Img/Imagen3.png';
import {ReactComponent as FlechaIzquierda} from './../Img/Izquierda.svg';
import {ReactComponent as FlechaDerecha} from './../Img/Derecha.svg';
import styled from "styled-components";


const Slider = () => {

    const slides = useRef(null);

    const siguiente = () => {
        if(slides.current.children.length > 0){

            const primerElemento = slides.current.children[0];

            slides.current.style.transition = `300ms ease=out all`;

            const tamañoSlides = slides.current.children[0].offsetWidth;

            slides.current.style.transform = `translateX(-${tamañoSlides}px)`;

            const transicion = () => {

            slides.current.style.transition = 'none';
            slides.current.style.transform = `translateX(0)`;

            slides.current.appendChild(primerElemento);
            
            }

            slides.current.addEventListener('transitionend', transicion);

        }
    }
    
    const anterior = () => {
        console.log('anterior');
    }

    return (
        <ContenedorPrincipal>
            <ContenedorSlides ref={slides}>
                <Slide>
                    <a href = "https://www.grupobancolombia.com/personas">
                        <img src = {img1} alt=""/>
                    </a>

                </Slide>
                <Slide>
                    <a href = "https://www.grupobancolombia.com/personas">
                        <img src = {img2} alt=""/>
                    </a>

                </Slide>
                <Slide>
                    <a href = "https://www.grupobancolombia.com/personas">
                        <img src = {img3} alt=""/>
                    </a>

                </Slide>
            </ContenedorSlides>
            <Controles>
                <Boton onClick ={anterior}>
                    <FlechaIzquierda />
                </Boton>
                <Boton Derecho onClick={siguiente}>
                    <FlechaDerecha />
                </Boton>
            </Controles>
        </ContenedorPrincipal>
    )
}

const ContenedorPrincipal = styled.div`
Position: relative;
`;
const ContenedorSlides = styled.div`
display: flex;
flex-wrap: nowrap;
`;
const Slide = styled.div`
min-width: 100%;
overflow: hidden;
transition: .3s ease all;
z-index: 9;
position: relative;

img{
    width: 100%;
    vertical-align: top;
}
`;

const Controles = styled.div`
position: absolute;
top: 0;
z-index: 18;
width: 100%;
height: 100%;
pointer-events: none;
`;
const Boton = styled.button`
pointer-events: all;
background: none;
border: none;
cursor: pointer;
outline: none;
width: 50px;
height: 100%;
text-align: center;
position: absolute;
transition: .3s ease all;
&:hover{
    background: rgba(0,0,0,.2);
    path{
        fill: #fff;
    }
}

path{
    filter: ${props => props.Derecho ? 'drop-shadow (-2px 0px 0px #fff)' : 'drop-shadow (2px 0px 0px #fff)'};
};

${props => props.Derecho ? 'right: 0': 'left: 0'}
`;
export default Slider;

