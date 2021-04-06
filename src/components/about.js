import React from "react";
import steffen from '../images/steffen.JPEG'

function About() {
	return(
		<div id="main">
			<span role="img" aria-label="back arrow" style={{marginBottom: '2%'}}><a href="/">🔙</a></span>
			<h2 class="major">About</h2>
			<span class="image main"><img src={steffen} alt="" /></span>
			<p>The word <i>tyron</i> derives from the Greek <i>turannos</i> that means sovereign, and the purpose of the Tyron Self-Sovereign Identity Protocol is to give people sovereignty over their data. Sovereignty to empower our world by protecting nature and helping each other in times of need, selflessly.</p>
			<h3 class="major">Self-sovereign identity (SSI)</h3>
			<p>Self-sovereign identity enables people to manage their digital, online identities - proving who they are without a middleman, by anchoring <a href="/did">decentralized identifiers</a> on blockchain networks as a shared root of trust.</p>
			<p>Tyron self-sovereign identities will be able to share uncensorable information such as articles and encrypted messages, as well as make donations to aid natural and man-made disasters that endanger our planet's ecosystems. For that, we are developing the <a href="/mapu">.Mapu</a> platform.</p>
		</div>
	);
}

export default About;
