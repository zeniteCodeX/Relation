import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import {setProfile, setLeft} from '../../manager.js';
import './LeftBar.css';

const LeftBar = () => {
    useEffect(() => {
        setProfile();
        setLeft();

        const burger = document.querySelector('.btn_burger');
        function open() {
            burger.addEventListener('click', () => {
                document.querySelector('.left_bar').classList.add('open');
                document.querySelectorAll('.left_bar .on_el, #_lo').forEach((p) => {
                    p.classList.remove('on_el');
                });

                document.querySelectorAll('.el').forEach((el) => {
                    el.setAttribute('style', 'justify-content: flex-start');
                })
                burger.classList.add('on_bar');
                close();
            });
        };
        open();

        function close() {
            document.querySelector('.on_bar').addEventListener('click', () => {
                document.querySelector('.left_bar').classList.remove('open');
                document.querySelectorAll('.left_bar .p_el, #_lo').forEach((p) => {
                    p.classList.add('on_el');
                });
                document.querySelectorAll('.left_bar .el').forEach((el) => {
                    el.setAttribute('style', 'justify-content: center');
                })
                burger.classList.remove('on_bar');
                open();
            });
        };

        if (localStorage.length > 1) {
            const name = localStorage.getItem('name');
            const designation = localStorage.getItem('select');
            const localInner = document.createElement('div');
            const localName = document.createElement('p');
            const localDesignation = document.createElement('p');
            localName.classList.add('txt_title');
            localName.classList.add('on_el');
            localDesignation.classList.add('t_note');
            localDesignation.classList.add('on_el');
            localName.innerText = name;
            localDesignation.innerText = designation;
            localName.setAttribute('id', '_lo');
            localDesignation.setAttribute('id', '_lo');
            localInner.appendChild(localName);
            localInner.appendChild(localDesignation);
            document.querySelector('.profile_').appendChild(localInner);
        };
    });

    return (
        <div className="left_bar">
            <ul className="bar">
                <div className="btn_open_bar">
                    <div className="btn_burger">
                        <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2H26" stroke="#382F70" strokeWidth="3" strokeLinecap="round" />
                            <path d="M2 10H26" stroke="#382F70" strokeWidth="3" strokeLinecap="round" />
                            <path d="M2 18H26" stroke="#382F70" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                <ul className="opt_bar">
                    <Link to='/atividades'>
                        <li className="el" style={{ justifyContent: 'center' }} aria-label="Início">

                            <span>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.13478 21.0734V18.0157C9.13478 17.2351 9.77217 16.6024 10.5584 16.6024H13.4326C13.8102 16.6024 14.1723 16.7513 14.4393 17.0163C14.7063 17.2813 14.8563 17.6408 14.8563 18.0157V21.0734C14.8539 21.3979 14.9821 21.7099 15.2124 21.9402C15.4427 22.1705 15.756 22.3 16.0829 22.3H18.0438C18.9596 22.3024 19.8388 21.9429 20.4872 21.3009C21.1356 20.6588 21.5 19.787 21.5 18.8779V10.1669C21.5 9.43251 21.1721 8.73589 20.6046 8.26472L13.934 2.97592C12.7737 2.04861 11.1111 2.07855 9.98539 3.04703L3.46701 8.26472C2.87274 8.722 2.51755 9.42068 2.5 10.1669V18.869C2.5 20.7639 4.04738 22.3 5.95617 22.3H7.87229C8.55123 22.3 9.103 21.7563 9.10792 21.0823L9.13478 21.0734Z"
                                        fill="#382F70" />
                                </svg>

                            </span>
                            <p className="p_el on_el">Início</p>

                        </li>
                    </Link>
                    <Link to='/estudos'>
                        <li className="el" style={{ justifyContent: 'center' }} aria-label="Revisitas e Estudos">
                            <span>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.949 15.0396C15.3802 15.0396 18.31 15.5836 18.31 17.7604C18.31 19.9362 15.399 20.5 11.949 20.5C8.51785 20.5 5.58809 19.956 5.58809 17.7802C5.58809 15.6034 8.49904 15.0396 11.949 15.0396ZM17.4351 13.7289C18.7468 13.7046 20.1571 13.8847 20.6782 14.0126C21.7823 14.2296 22.5084 14.6727 22.8093 15.3166C23.0636 15.8453 23.0636 16.4586 22.8093 16.9864C22.349 17.9851 20.8654 18.3058 20.2887 18.3886C20.1696 18.4066 20.0738 18.3031 20.0864 18.1833C20.3809 15.4157 18.0377 14.1035 17.4315 13.8018C17.4055 13.7883 17.4002 13.7676 17.4028 13.755C17.4046 13.746 17.4154 13.7316 17.4351 13.7289ZM6.31858 13.727L6.5656 13.7292C6.5853 13.7319 6.59515 13.7464 6.59694 13.7545C6.59963 13.768 6.59425 13.7878 6.56918 13.8022C5.9621 14.1039 3.61883 15.4161 3.91342 18.1827C3.92595 18.3034 3.83104 18.4061 3.71195 18.389C3.13531 18.3061 1.65163 17.9855 1.19139 16.9867C0.936203 16.4581 0.936203 15.8457 1.19139 15.317C1.49225 14.6731 2.21752 14.23 3.32156 14.012C3.84358 13.885 5.25294 13.7049 6.5656 13.7292L6.31858 13.727ZM11.949 4.5C14.2851 4.5 16.1583 6.38227 16.1583 8.73285C16.1583 11.0825 14.2851 12.9666 11.949 12.9666C9.61292 12.9666 7.73974 11.0825 7.73974 8.73285C7.73974 6.38227 9.61292 4.5 11.949 4.5ZM17.6634 5.2059C19.9198 5.2059 21.6918 7.34123 21.0883 9.71974C20.6809 11.321 19.2062 12.3846 17.5631 12.3414C17.3984 12.3369 17.2363 12.3216 17.0796 12.2946C16.9659 12.2748 16.9086 12.146 16.973 12.0505C17.5998 11.1229 17.9571 10.007 17.9571 8.80922C17.9571 7.55918 17.5667 6.3938 16.8889 5.43825C16.8674 5.40853 16.8513 5.3626 16.8728 5.32838C16.8907 5.30046 16.9238 5.28605 16.9551 5.27884C17.1835 5.23201 17.4181 5.2059 17.6634 5.2059ZM6.33593 5.20581C6.58127 5.20581 6.81587 5.23192 7.04509 5.27875C7.07553 5.28596 7.10956 5.30127 7.12747 5.32829C7.14806 5.36251 7.13284 5.40844 7.11135 5.43816C6.43353 6.39371 6.04313 7.55909 6.04313 8.80913C6.04313 10.0069 6.4004 11.1228 7.02718 12.0504C7.09165 12.1459 7.03434 12.2747 6.92063 12.2945C6.76304 12.3224 6.60186 12.3368 6.43711 12.3413C4.79405 12.3845 3.31932 11.3209 2.91191 9.71965C2.30751 7.34114 4.07951 5.20581 6.33593 5.20581Z"
                                        fill="#382F70" />
                                </svg>

                            </span>
                            <p className="p_el on_el">Revisitas e Estudos</p>
                        </li>
                    </Link>
                    <Link to='/programacao'>
                        <li className="el" style={{ justifyContent: 'center' }} aria-label="Programação">
                            <span>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.6497 2.5C16.0742 2.49901 16.4099 2.82884 16.4109 3.26862L16.4119 4.01824C19.1665 4.23414 20.9862 6.1112 20.9891 8.98975L21 17.4155C21.0039 20.554 19.0322 22.485 15.8718 22.49L8.15189 22.5C5.0112 22.504 3.01482 20.527 3.01087 17.3796L3.00001 9.05272C2.99606 6.15517 4.75153 4.28311 7.50618 4.03024L7.50519 3.28061C7.5042 2.84083 7.83002 2.51 8.26445 2.51C8.69887 2.509 9.02469 2.83883 9.02568 3.27861L9.02666 3.97826L14.8914 3.97027L14.8904 3.27062C14.8894 2.83084 15.2152 2.501 15.6497 2.5ZM16.0525 16.6919H16.0426C15.5884 16.7029 15.2241 17.0837 15.234 17.5435C15.235 18.0032 15.6013 18.3821 16.0555 18.392C16.5185 18.391 16.8937 18.0102 16.8927 17.5405C16.8927 17.0707 16.5165 16.6919 16.0525 16.6919ZM7.91691 16.6929C7.46274 16.7129 7.1073 17.0937 7.10828 17.5535C7.12902 18.0132 7.5042 18.3731 7.95837 18.3521C8.40366 18.3321 8.75811 17.9513 8.73738 17.4915C8.7275 17.0417 8.3612 16.6919 7.91691 16.6929ZM11.9847 16.6879C11.5305 16.7089 11.1761 17.0887 11.1761 17.5485C11.1968 18.0082 11.572 18.3671 12.0262 18.3471C12.4705 18.3261 12.8259 17.9463 12.8052 17.4855C12.7953 17.0367 12.429 16.6869 11.9847 16.6879ZM7.91197 13.0947C7.4578 13.1147 7.10335 13.4955 7.10433 13.9553C7.12408 14.415 7.50025 14.7749 7.95442 14.7539C8.39872 14.7339 8.75317 14.3531 8.73244 13.8933C8.72257 13.4435 8.35725 13.0937 7.91197 13.0947ZM11.9807 13.0597C11.5266 13.0797 11.1711 13.4605 11.1721 13.9203C11.1919 14.3801 11.568 14.7389 12.0222 14.7189C12.4665 14.6979 12.821 14.3181 12.8012 13.8583C12.7904 13.4085 12.425 13.0587 11.9807 13.0597ZM16.0485 13.0647C15.5944 13.0747 15.2389 13.4445 15.2399 13.9043V13.9153C15.2498 14.3751 15.625 14.7239 16.0801 14.7139C16.5244 14.7029 16.8789 14.3221 16.869 13.8623C16.8483 13.4225 16.4918 13.0637 16.0485 13.0647ZM14.8934 5.5095L9.02864 5.51749L9.02962 6.32609C9.02962 6.75687 8.70479 7.0967 8.27037 7.0967C7.83595 7.0977 7.50914 6.75887 7.50914 6.32809L7.50815 5.55847C5.58286 5.75138 4.51754 6.88281 4.52049 9.05072L4.52149 9.36157L19.4696 9.34158V8.99175C19.4272 6.84283 18.349 5.71539 16.4138 5.54748L16.4148 6.31709C16.4148 6.74688 16.0801 7.08771 15.6556 7.08771C15.2212 7.08871 14.8944 6.74888 14.8944 6.31909L14.8934 5.5095Z"
                                        fill="#382F70" />
                                </svg>

                            </span>
                            <p className="p_el on_el">Programação</p>
                        </li>
                    </Link>
                    <Link to='/totais'>
                        <li className="el" style={{ justifyContent: 'center' }} aria-label="Dados Totais">
                            <span>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.6695 2.30005C20.0705 2.30005 21.9905 4.22905 22.0005 7.63005V16.97C22.0005 20.37 20.0705 22.3 16.6695 22.3H7.33049C3.92949 22.3 2.00049 20.37 2.00049 16.97V7.63005C2.00049 4.22905 3.92949 2.30005 7.33049 2.30005H16.6695ZM12.5005 6.43005C12.2195 6.26005 11.8795 6.26005 11.6105 6.43005C11.3395 6.59905 11.1905 6.91005 11.2195 7.22005V17.41C11.2705 17.84 11.6295 18.16 12.0495 18.16C12.4805 18.16 12.8395 17.84 12.8795 17.41V7.22005C12.9195 6.91005 12.7705 6.59905 12.5005 6.43005ZM7.83049 9.71005C7.56049 9.54005 7.21949 9.54005 6.95049 9.71005C6.67949 9.88005 6.53049 10.189 6.56049 10.5V17.41C6.59949 17.84 6.95949 18.16 7.38949 18.16C7.82049 18.16 8.17949 17.84 8.21949 17.41V10.5C8.25049 10.189 8.09949 9.88005 7.83049 9.71005ZM17.0895 13.34C16.8205 13.17 16.4805 13.17 16.2005 13.34C15.9295 13.51 15.7805 13.809 15.8205 14.13V17.41C15.8605 17.84 16.2195 18.16 16.6505 18.16C17.0705 18.16 17.4295 17.84 17.4805 17.41V14.13C17.5095 13.809 17.3605 13.51 17.0895 13.34Z"
                                        fill="#382F70" />
                                </svg>

                            </span>
                            <p className="p_el on_el">Dados totais</p>
                        </li>
                    </Link>
                </ul>

                <div className="profile_" aria-label="Perfil">
                    <div className="account img">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="14" r="14" fill="#382F70" />
                            <path
                                d="M14.2781 17.0593C18.204 17.0593 21.5562 17.6817 21.5562 20.1723C21.5562 22.662 18.2256 23.307 14.2781 23.307C10.3522 23.307 7 22.6846 7 20.195C7 17.7044 10.3307 17.0593 14.2781 17.0593ZM14.2781 5C16.9511 5 19.0943 7.15367 19.0943 9.84318C19.0943 12.5317 16.9511 14.6874 14.2781 14.6874C11.6052 14.6874 9.4619 12.5317 9.4619 9.84318C9.4619 7.15367 11.6052 5 14.2781 5Z"
                                fill="#F1F1F1" />
                        </svg>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default LeftBar;