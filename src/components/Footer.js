import React from 'react'
import './Footer.scss';

import { About } from './About';
import { Reviews } from './Reviews';

import { Button } from 'react-bootstrap';
import { ArrowBarUp } from 'react-bootstrap-icons';

import { useLitteraMethods } from "@assembless/react-littera";
import Select from 'react-select';

const languageOptions = [{
    label: 'Українська',
    value: 'uk_UA'
}, {
    label: 'English',
    value: 'en_US'
},
{
    label: 'Polish',
    value: 'pl_PL'
},
{
    label: 'German',
    value: 'de_DE'
}
]

function Footer() {
    const methods = useLitteraMethods();

    const handleLocaleChange = (languageOption) => {
        // console.log(languageOption);
        methods.setLocale(languageOption.value);
    }

    return (
        <div className="Footer">
            <About />
            <Reviews />
            <Select className="Footer__langOptions"
                placeholder="Змінити мову"
                defaultValue={'uk_UA'}
                onChange={handleLocaleChange}
                options={languageOptions}
            />
            <div className="FooterButton my-4">
                <Button className="GoToUp" onClick={e => {
                    window.scrollTo({ top: 0 })
                }}>
                    <ArrowBarUp />
                </Button>
            </div>
        </div>
    );
}

export {
    Footer
}
