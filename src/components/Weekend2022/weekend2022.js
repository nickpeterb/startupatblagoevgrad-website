import React from "react";
import Judges2022 from "./PeopleComp/judges";
import Mentors2022 from "./PeopleComp/mentors";
import Sponsors2022 from "./SponsorsComp/sponsors";
import Ticket from "./TicketComp/ticket";
import "./weekend2022.css";

export default function Weekend2022() {
	return (
		<div className="weekend2022">
			<Ticket />
			<div class="week-desc-2022">
				Join us for the 2022 StartUP Weekend where teams will go
				head-to-head putting their startup ideas to the test! Each team
				will be guided by a mentor and will have 48 to create and plan
				an original startup to be evaluated by the judges on the last
				day.
			</div>
			<Judges2022 />
			<Mentors2022 />
			<Sponsors2022 />
		</div>
	);
}
