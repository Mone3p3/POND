
import './css/crearPost.css'
import { useState, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';

function CrearPost({cerrarCrear}){

    const [poll, setPoll] = useState('escribir');
    const [imagen, setImagen] = useState(null);
    const inputImagen = useRef(null);
    const cargarImagen = (e) => {

        const archivo = e.target.files[0];

        if (archivo && archivo.type.startsWith('image/')) {
            setImagen(URL.createObjectURL(archivo));
        }
    };
    const [texto, setTexto] = useState('');
    const [mostrarEmojis, setMostrarEmojis] = useState(false);
        
    return(
        <div className="crear-bg" onClick={cerrarCrear}>
            <div className={`crear-container ${imagen || poll === "poll" ? 'con-imagen' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className="crear-top">
                    <div className='post-user-container'>
                        <div className="user-image-small">
                            <img src="images/estanque2.jpg" alt="user-icon"/>
                        </div>
                        <span className="username"> Patatero </span>
                        <span className="arroba">@aloba</span>
                    </div>

                    <button className='btn-close' onClick={cerrarCrear}>
                        
                    </button>
                </div>

                <div className='crear-content'>
                        {poll === 'escribir' ? (
                            <>
                                <div className="crear-text">
                                    <textarea placeholder="¿Qué quieres publicar?" />
                                </div>

                                {imagen && (
                                    <div className="crear-img">
                                        <img src={imagen} alt="post-image" />
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="crear-opciones">

                                <div className="crear-text">
                                    <textarea placeholder="Escribe tu pregunta" />
                                </div>

                                <div className="poll-option">
                                    <textarea placeholder="Opcion 1" />
                                </div>

                                <div className="poll-option">
                                    <textarea placeholder="Opcion 2" />
                                </div>

                                <span className='post-text '>Duracion de encuesta:</span>

                                <div className='login-fill-box-fecha poll-container'>
                                    <div className='d-flex flex-column'>
                                        <span className='poll-text'>Dias</span>
                                        <select name="dia" className='login-fill-box box-año '>
                                            <option value="1"  selected>1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                        </select>
                                    </div>

                                    <div className='d-flex flex-column'>
                                        <span className='poll-text'>Horas</span>
                                        <select name='mes' className="login-fill-box box-año ">
                                            <option value="0"  selected>0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                        </select>
                                    </div>

                                    <div className='d-flex flex-column'>
                                        <span className='poll-text'>Minutos</span>
                                        <select name='año' className="login-fill-box box-año poll-option">
                                            <option value="0"  selected>0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                            <option value="32">32</option>
                                            <option value="33">33</option>
                                            <option value="34">34</option>
                                            <option value="35">35</option>
                                            <option value="36">36</option>
                                            <option value="37">37</option>
                                            <option value="38">38</option>
                                            <option value="39">39</option>
                                            <option value="40">40</option>
                                            <option value="41">41</option>
                                            <option value="42">42</option>
                                            <option value="43">43</option>
                                            <option value="44">44</option>
                                            <option value="45">45</option>
                                            <option value="46">46</option>
                                            <option value="47">47</option>
                                            <option value="48">48</option>
                                            <option value="49">49</option>
                                            <option value="50">50</option>
                                            <option value="51">51</option>
                                            <option value="52">52</option>
                                            <option value="53">53</option>
                                            <option value="54">54</option>
                                            <option value="55">55</option>
                                            <option value="56">56</option>
                                            <option value="57">57</option>
                                            <option value="58">58</option>
                                            <option value="59">59</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='w-100  d-flex'>
                                    <button className='poll-eliminar-btn' onClick={() => setPoll('escribir')}> Eliminar encuesta </button>
                                </div>
                            </div>
                        )}
                </div>

                <hr></hr>

                <div className="crear-bottom">
                    <div className='crear-bottom-left'>
                        <input type="file" accept="image/*" ref={inputImagen} onChange={cargarImagen} hidden/>
                        <svg onClick={() => inputImagen.current.click()} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-sub)">
                            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-sub)">
                            <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm263.5 221.5Q659-337 684-400h-66q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-66q25 63 80.5 101.5T480-260q68 0 123.5-38.5ZM324-111.5Q251-143 197-197t-85.5-127Q80-397 80-480t31.5-156Q143-709 197-763t127-85.5Q397-880 480-880t156 31.5Q709-817 763-763t85.5 127Q880-563 880-480t-31.5 156Q817-251 763-197t-127 85.5Q563-80 480-80t-156-31.5ZM480-480Zm227 227q93-93 93-227t-93-227q-93-93-227-93t-227 93q-93 93-93 227t93 227q93 93 227 93t227-93Z"/>
                        </svg>
                        <svg onClick={() => setPoll('poll')} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--text-sub)">
                            <path d="M480-560h200v-80H480v80Zm0 240h200v-80H480v80Zm-63.5-223.5Q440-567 440-600t-23.5-56.5Q393-680 360-680t-56.5 23.5Q280-633 280-600t23.5 56.5Q327-520 360-520t56.5-23.5Zm0 240Q440-327 440-360t-23.5-56.5Q393-440 360-440t-56.5 23.5Q280-393 280-360t23.5 56.5Q327-280 360-280t56.5-23.5ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
                        </svg>
                    </div>
                    <div className='crear-bottom-right'>
                        <button className='publicar-button-crear'>
                            <span>Publicar</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );

}

export default CrearPost;