import * as React from 'react';
import "../../css/style.css";
import "../../css/modulo-usuario/reseñas.css"

const Reseñas = () => {
    return (
        <div className='reseñas-onipiones tienda-virtual'>
            <h2>Reseñas de nuestros clientes</h2>
            <section className='nav-reseñas'>
                <div className="tab-container">
                    <input type="radio" name="tab" id="tab1" className="tab tab--1" />
                    <label className="tab_label" htmlFor="tab1">Reseñas</label>

                    <input type="radio" name="tab" id="tab2" className="tab tab--2" />
                    <label className="tab_label" htmlFor="tab2">Opiniones</label>

                    <input type="radio" name="tab" id="tab3" className="tab tab--3" />
                    <label className="tab_label" htmlFor="tab3">Preguntas</label>

                    <div className="indicator"></div>
                </div>
            </section>
            <section className='contenido-reseñas'>
                <div className='texto-reseñas'>
                    <p>⭐ <b>Tu voz es nuestra revolución</b> ⭐<br />

                        En nuestra tienda, cada pieza es más que un producto: es una expresión de arte, rebeldía y autenticidad. Tu opinión es el motor que impulsa nuestra creatividad y nos ayuda a seguir rompiendo esquemas. 🖤🔥 Si nuestras creaciones han despertado algo en ti, cuéntanos tu experiencia. Tus reseñas no solo nos inspiran, también guían a otros espíritus libres en su búsqueda de piezas únicas. 🚀 ¡Déjanos tu comentario y sigue siendo parte de esta revolución artística! 🎨✨</p>
                </div>
                <div className="card-reseñas">
                    <p className="title-reseñas">¿Qué dicen los clientes de nuestros productos?</p>
                    <div className="user__container-reseñas">
                        <div className="user-reseñas">
                            <div className="image-reseñas">
                                <img src="/images/Iconos/avatar.png" alt="" />
                            </div>
                            <div className="user__content-reseñas">
                                <div className="text-reseñas">
                                    <span className="name-reseñas">Name usuario</span>
                                    <p className="username-reseñas">contenido de su comentario</p>
                                </div>
                                <button className="follow-reseñas">Ver producto</button>
                            </div>
                        </div>
                        <div className="user-reseñas">
                            <div className="image-reseñas">
                                <img src="/images/Iconos/avatar.png" alt="" />
                            </div>
                            <div className="user__content-reseñas">
                                <div className="text-reseñas">
                                    <span className="name-reseñas">Name usuario</span>
                                    <p className="username-reseñas">contenido de su comentario</p>
                                </div>
                                <button className="follow-reseñas">Ver producto</button>
                            </div>
                        </div>
                        <div className="user-reseñas">
                            <div className="image-reseñas">
                                <img src="/images/Iconos/avatar.png" alt="" />
                            </div>
                            <div className="user__content-reseñas">
                                <div className="text-reseñas">
                                    <span className="name-reseñas">Name usuario</span>
                                    <p className="username-reseñas">contenido de su comentario</p>
                                </div>
                                <button className="follow-reseñas">Ver producto</button>
                            </div>
                        </div>
                        <div className="user-reseñas">
                            <div className="image-reseñas">
                                <img src="/images/Iconos/avatar.png" alt="" />
                            </div>
                            <div className="user__content-reseñas">
                                <div className="text-reseñas">
                                    <span className="name-reseñas">Name usuario</span>
                                    <p className="username-reseñas">contenido de su comentario</p>
                                </div>
                                <button className="follow-reseñas">Ver producto</button>
                            </div>
                        </div>
                        <div className="user-reseñas">
                            <div className="image-reseñas">
                                <img src="/images/Iconos/avatar.png" alt="" />
                            </div>
                            <div className="user__content-reseñas">
                                <div className="text-reseñas">
                                    <span className="name-reseñas">Name usuario</span>
                                    <p className="username-reseñas">contenido de su comentario</p>
                                </div>
                                <button className="follow-reseñas">Ver producto</button>
                            </div>
                        </div>
                        <div className="user-reseñas">
                            <div className="image-reseñas">
                                <img src="/images/Iconos/avatar.png" alt="" />
                            </div>
                            <div className="user__content-reseñas">
                                <div className="text-reseñas">
                                    <span className="name-reseñas">Name usuario</span>
                                    <p className="username-reseñas">contenido de su comentario</p>
                                </div>
                                <button className="follow-reseñas">Ver producto</button>
                            </div>
                        </div>
                        <div className="user-reseñas">
                            <div className="image-reseñas">
                                <img src="/images/Iconos/avatar.png" alt="" />
                            </div>
                            <div className="user__content-reseñas">
                                <div className="text-reseñas">
                                    <span className="name-reseñas">Name usuario</span>
                                    <p className="username-reseñas">contenido de su comentario</p>
                                </div>
                                <button className="follow-reseñas">Ver producto</button>
                            </div>
                        </div>
                        <div className="user-reseñas">
                            <div className="image-reseñas">
                                <img src="/images/Iconos/avatar.png" alt="" />
                            </div>
                            <div className="user__content-reseñas">
                                <div className="text-reseñas">
                                    <span className="name-reseñas">Name usuario</span>
                                    <p className="username-reseñas">contenido de su comentario</p>
                                </div>
                                <button className="follow-reseñas">Ver producto</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='publicidad'>
                <h2>Publicidad</h2>
            </div>
        </div>
    );
};

export default Reseñas;