import React, { useEffect } from "react";
import ManageSettingsHeader from "../Modals/ManageSettings/ManageSettings";
import total from '../../data/totalData.ts';

const Header = () => {

    useEffect(() => {
        function open() {
            document.querySelector('.man_opts').addEventListener('click', () => {
                document.querySelector('.man_head').style.display = 'grid';
                document.querySelector('.man_opts').classList.add('on');
                document.querySelector('.head_t.man_opts span svg').classList.add('anin');
                close();
            });
        };
        open();

        function close() {
            document.querySelector('.man_opts.on').addEventListener('click', () => {
                document.querySelector('.man_opts .man_head').style.display = 'none';
                document.querySelector('.man_opts').classList.remove('on');
                document.querySelector('.head_t.man_opts span svg').classList.remove('anin');
                open();
            });
        };
    });
    return (
        <header id="head" className="head">
            <div className="head_t" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ lineHeight: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 0C17.083 0 22 4.928 22 11C22 17.083 17.083 22 11 22C4.928 22 0 17.083 0 11C0 4.928 4.928 0 11 0ZM10.615 5.423C10.164 5.423 9.79 5.786 9.79 6.248V11.803C9.79 12.089 9.944 12.353 10.197 12.507L14.509 15.081C14.641 15.158 14.784 15.202 14.938 15.202C15.213 15.202 15.488 15.059 15.642 14.795C15.873 14.41 15.752 13.904 15.356 13.662L11.44 11.33V6.248C11.44 5.786 11.066 5.423 10.615 5.423Z"
                            fill="#E2E1EB"></path>
                    </svg>
                </span>
                <div style={{ position: 'absolute', margin: '0 0 0 28px', textAlign: 'left', userSelect: 'none', diplay: 'grid' }}>
                    <p className="txt_logo">Relation App</p>
                    <a href='https://github.com/savioandre/Relation' style={{ fontSize: '1rem', display: 'block', color: '#f1f1f1', fontWeight: 700 }} target='_blank' rel='noreferrer'>Version beta 2.8.2</a>
                </div>
            </div>
            <div className="head_t">
                <label id="sel_" className="l_in">
                    <p className="txt_bas">Atividades do mês —</p>
                    <span className="month_act txt_bas">
                        {total.month()}
                    </span>
                </label>
            </div>
            <div className="head_t man_opts">
                <span style={{ lineHeight: 0 }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7172 2.00012C13.4735 2.00012 14.1582 2.42012 14.5363 3.04012C14.7203 3.34012 14.8429 3.71012 14.8122 4.10012C14.7918 4.40012 14.8838 4.70012 15.0473 4.98012C15.5685 5.83012 16.7233 6.15012 17.6226 5.67012C18.6344 5.09012 19.9118 5.44012 20.4943 6.43012L21.179 7.61012C21.7718 8.60012 21.4447 9.87012 20.4228 10.4401C19.5541 10.9501 19.2475 12.0801 19.7687 12.9401C19.9322 13.2101 20.1162 13.4401 20.4023 13.5801C20.76 13.7701 21.036 14.0701 21.2301 14.3701C21.6083 14.9901 21.5776 15.7501 21.2097 16.4201L20.4943 17.6201C20.1162 18.2601 19.411 18.6601 18.6855 18.6601C18.3278 18.6601 17.9292 18.5601 17.6022 18.3601C17.3365 18.1901 17.0299 18.1301 16.7029 18.1301C15.6911 18.1301 14.8429 18.9601 14.8122 19.9501C14.8122 21.1001 13.872 22.0001 12.6968 22.0001H11.3069C10.1215 22.0001 9.18125 21.1001 9.18125 19.9501C9.16081 18.9601 8.31259 18.1301 7.30085 18.1301C6.96361 18.1301 6.65702 18.1901 6.40153 18.3601C6.0745 18.5601 5.66572 18.6601 5.31825 18.6601C4.58245 18.6601 3.87729 18.2601 3.49917 17.6201L2.79402 16.4201C2.4159 15.7701 2.39546 14.9901 2.77358 14.3701C2.93709 14.0701 3.24368 13.7701 3.59115 13.5801C3.87729 13.4401 4.06125 13.2101 4.23498 12.9401C4.74596 12.0801 4.43937 10.9501 3.57071 10.4401C2.55897 9.87012 2.23194 8.60012 2.81446 7.61012L3.49917 6.43012C4.09191 5.44012 5.35913 5.09012 6.38109 5.67012C7.27019 6.15012 8.425 5.83012 8.9462 4.98012C9.10972 4.70012 9.20169 4.40012 9.18125 4.10012C9.16081 3.71012 9.27323 3.34012 9.4674 3.04012C9.84553 2.42012 10.5302 2.02012 11.2763 2.00012H12.7172ZM12.0121 9.18012C10.4076 9.18012 9.10972 10.4401 9.10972 12.0101C9.10972 13.5801 10.4076 14.8301 12.0121 14.8301C13.6165 14.8301 14.8838 13.5801 14.8838 12.0101C14.8838 10.4401 13.6165 9.18012 12.0121 9.18012Z" fill="#F1F1F1" />
                    </svg>
                </span>

                <ManageSettingsHeader></ManageSettingsHeader>
            </div>
        </header>
    )
}

export default Header;