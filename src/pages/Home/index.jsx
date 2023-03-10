import React from 'react';
import { Link } from "react-router-dom";
import Style from './home.module.css';
// import {createBrowserHistory} from "history";

const Home = _ => {
    // document.getElementById("ButtonCopyEmail").addEventListener("click", function copiarTexto() {
    //     let textoCopiado = document.getElementById("TextCopyEmail");
    //     console.log(textoCopiado)
    //     textoCopiado.select();
    //     textoCopiado.setSelectionRange(0, 99999)
    //     document.execCommand("copy");
    //     document.getElementById("name").focus()
    // })

    // document.getElementById("Submit").addEventListener("submit", e => {
    //     e.preventDefault()
    //     const SubmitAssunto = String(document.getElementById("_subject").value)
    //     const SubmitNome = String(document.getElementById("name").value)
    //     const SubmitEmail = String(document.getElementById("email").value)
    //     const SubmitMessagem = String(document.getElementById("message").value)

    //     console.log(SubmitAssunto)
    //     console.log(SubmitNome)
    //     console.log(SubmitEmail)
    //     console.log(SubmitMessagem)

    //     document.getElementById("Status").style.display = "block";
    //     document.getElementById("Status").style.backgroundColor = "gray";
    //     document.getElementById("Status").style.color = "white";
    //     document.getElementById("Status").innerText = "Enviando Mensagem...";

        // axios.defaults.headers.post['Content-Type'] = 'application/json';
        // axios.post('https://formsubmit.co/ajax/samarion2@hotmail.com', JSON.stringify({
        //     _subject: SubmitAssunto,
        //     name: SubmitNome,
        //     email: SubmitEmail,
        //     message: SubmitMessagem
        // }))
        // .then(response => {
        //     console.log(response)
        //     if(response.status === 200){
        //         document.getElementById("Status").style.backgroundColor = "#339900";
        //         document.getElementById("Status").innerText = "Seu E-mail Foi Enviado Com Sucesso!!!";
        //     }
        // })
        // .catch(error => {
        // console.log(error)
        // document.getElementById("Status").style.backgroundColor = "#ff0f0f";
        // document.getElementById("Status").innerText = "Houve um erro no envio do seu E-mail!!!"
        // });

    // })
    
    function toLink(e, id) {
        e.preventDefault();
        // const target = document.querySelector(id);
        // window.smoothScroll.animateScroll( target );
        const offsetTop = document.getElementById(id).offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }
    return (
        <div className={Style.App}>
            <div className={Style.Links} id={Style.Navegation}>
                <button className={Style.Link} id={Style.LinkHome} onClick={(e) => toLink(e, Style.Home)}>
                    <i className="fa-solid fa-house"></i>
                </button>
                <button className={Style.Link} id={Style.LinkProject} onClick={(e) => toLink(e, Style.Project)}>
                    <i className="fa-solid fa-folder-open"></i>
                </button>
                <button className={Style.Link} id={Style.LinkContact} onClick={(e) => toLink(e, Style.Contact)}>
                    <i className="fa-solid fa-envelope"></i>
                </button>
            </div>

            <div className={Style.View} id={Style.Home}>
                <div className={Style.Placard}>
                    <h1>samarion<br/>junior</h1>
                    <h3>Desenvolvedor Web</h3>
                    <div className={Style.buttons}>
                        <button onClick={(e) => toLink(e, Style.Project)}>Projetos</button>
                        <button onClick={(e) => toLink(e, Style.Contact)}>Contato</button>
                    </div>
                </div>
            </div>

            <div className={Style.View} id={Style.Project}>
                <div className={Style.Painel}>
                    <div className={Style.Thumbnail} id={Style.ThumbnailToDo}>

                    </div>
                    <div className={Style.Description}>
                        <h4>ToDo List</h4>
                        <p>
                            ?? uma lista de tarefas,
                            de coisas que precisam ser feitas.
                            ?? uma forma de organizar as atividades que n??o podem ser esquecidas,
                            e que n??o est??o inseridas na nossa rotina.
                            ?? diferente de uma agenda,
                            onde as atividades tem dia e hora para acontecer.
                            Como por exemplo uma lista de compras.
                        </p>
                        <div className={Style.Actions}>
                            <Link to="/Teste/ToDo" className={Style.Action} target="_blank" rel="noopener noreferrer">Web</Link>
                            <Link to="/Teste/ToDo" className={Style.Action} target="_blank" rel="noopener noreferrer">Git</Link>
                            <Link to="/Teste/ToDo" className={Style.Action} target="_blank" rel="noopener noreferrer">Apk</Link>
                        </div>
                    </div>
                </div>
                <div className={`${Style.Painel} ${Style.PainelDisabled}`}>
                    <div className={Style.Thumbnail} id={Style.ThumbnailPokedex}>

                    </div>
                    <div className={Style.Description}>
                        <h4>Pokedex</h4>
                        <p>
                            A Pok??dex (palavra comum no vocabul??rio dos amantes de Pok??mon)
                            ?? uma enciclop??dia virtual que det??m todas as esp??cies de pok??mon.
                        </p>
                        <div className={Style.Actions}>
                            <Link to="/Teste/ToDo" className={Style.Action} target="_blank" rel="noopener noreferrer">Web</Link>
                            <Link to="/Teste/ToDo" className={Style.Action} target="_blank" rel="noopener noreferrer">Git</Link>
                            <Link to="/Teste/ToDo" className={Style.Action} target="_blank" rel="noopener noreferrer">Apk</Link>
                        </div>
                    </div>
                </div>
                <div className={`${Style.Painel} ${Style.PainelDisabled}`}>
                    <div className={Style.Thumbnail} id={Style.ThumbnailPomodoro}>

                    </div>
                    <div className={Style.Description}>
                        <h4>Pomodoro</h4>
                        <p>
                            A T??cnica Pomodoro ?? um m??todo de gerenciamento de tempo
                            desenvolvido por Francesco Cirillo no final dos anos 1980.
                            A t??cnica consiste na utiliza????o de um cron??metro para dividir
                            o trabalho em per??odos de 25 minutos, separados por breves intervalos. 
                        </p>
                        <div className={Style.Actions}>
                            <Link to="/Teste/ToDo" className={Style.Action} target="_blank" rel="noopener noreferrer">Web</Link>
                            <Link to="/Teste/ToDo" className={Style.Action} target="_blank" rel="noopener noreferrer">Git</Link>
                            <Link to="/Teste/ToDo" className={Style.Action} target="_blank" rel="noopener noreferrer">Apk</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={Style.View} id={Style.Contact}>
                <div className={Style.AutoFill}>
                    <div className={Style.Information}>
                        <form className={Style.Form} id={Style.Submit}>
                            <span id={Style.Status}></span>
                            <input type="hidden" name="_captcha" value="false"/>
                            <div className={Style.Groups}>
                                <label className={Style.LabelInputText} htmlFor="name">Nome: </label>
                                <input className={Style.InputText} name="name" id={Style.name} type="text" placeholder="Digite seu Nome."/>
                            </div>
                            <div className={Style.Groups}>
                                <label className={Style.LabelInputText} htmlFor="_subject">Assunto: </label>
                                <input className={Style.InputText} name="_subject" id={Style._subject} type="text" placeholder="Digite o Tema."/>
                            </div>
                            <div className={Style.Groups}>
                                <label className={Style.LabelInputText} htmlFor="email">De: </label>
                                <input className={Style.InputText} name="email" id={Style.email} type="text" placeholder="Digite seu e-mail."/>
                            </div>
                            <div className={Style.Groups}>
                                <label className={Style.LabelInputText} htmlFor="message">Conte??do:</label>
                                <textarea className={Style.TextArea} name="message" id={Style.message} placeholder="Digite a Messagem."></textarea>
                            </div>
                            <div className={Style.Groups}>
                                <input className={`${Style.Button100} ${Style.ButtonDark} ${Style.InputButton}`} value="Enviar" id="submit" type="submit" name="submit"/>
                            </div>
                        </form>
                        <div className={`${Style.Column} ${Style.Contact}`}>
                            <div className={`${Style.Row} ${Style.Email}`}>
                                <input className={`${Style.Row} ${Style.EmailText}`} id={Style.TextCopyEmail} type="text" value="example2@e-mail.com" readOnly/>
                                <i className="fa-regular fa-copy Row" id={Style.ButtonCopyEmail}></i>
                            </div>
                        </div>
                        <div className={`${Style.Column} ${Style.SocialMidias}`}>
                            <div className={`${Style.Row} ${Style.Icons}`}>
                                <Link to="https://www.github.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-github"></i>
                                </Link>
                                <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.Footer}>
                    <div className={Style.Copyright}>Copyright (c) 2023 Samarion Junior</div>
                </div>
            </div>
        </div>
    )
}

export default Home;

        
