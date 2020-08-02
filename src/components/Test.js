import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import velko from '../images/team/velko.png';
import nick from '../images/team/nick.png';
import fatma from '../images/team/fatma.png';
import boyan from '../images/team/boyan.png';
import emma from '../images/team/emma.png';
import deni from '../images/team/deni.png';
import elito from '../images/team/elito.png';
import flavia from '../images/team/flavia.png';
import ilko from '../images/team/ilko.png';

const board = [
	{ name: 'velko', img: velko },
	{ name: 'emma', img: emma },
	{ name: 'boyan', img: boyan },
	{ name: 'nick', img: nick },
	{ name: 'fatma', img: fatma },
	{ name: 'ilko', img: ilko },
	{ name: 'deni', img: deni },
];

function MembersSlide(props) {
	return (
		<ol>
			{props.slide.map((member, index) => (
				<li key={index}>{member.name}</li>
			))}
		</ol>
	);
}

function splitMembers() {
    /*let groups = [];
    while (dept.length > 0) {
        groups.push(dept.splice(0, s));
    }
    return groups;*/
    console.log( board.splice(0,3));
    return board.splice(0,3);
};

function Test(){
    const [size, setSize] = useState(0);

    const handleMediaQueryChange = (matches) => {
        matches ? setSize(2) : setSize(3);
    };
    
	const isMobile = useMediaQuery(
		{ maxWidth: 768 },
		undefined,
		handleMediaQueryChange
    );

    useEffect(() => {
        isMobile ? setSize(2) : setSize(3);
    }, [size]);

	return (
		<div>
            <h1>{size}</h1>
            {/*{splitMembers(board,size).map((group, index) => (
				<MembersSlide slide={group} key={index}/>
            ))} */}
            {board.map((member, index) => (
                <></>
            ))}
            <MembersSlide slide={splitMembers()} />
		</div>
	);
}

export default Test;
