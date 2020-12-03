import React, { Component } from 'react';

class About extends Component {
  render() {
    return (

      <div style={{
        fontFamily: 'Helvetica',
       //display: 'flex', 
       textAlign: 'left',
	   textJustify: 'auto',
       padding: '110px',
       lineHeight: '25px'
     }}>
      		<div>
				<h1>About:</h1>
				<br/>
				<h2>Traffic Fatality Analyzer</h2>

				<div>
					<div style ={{marginLeft: "50px"}}>
						<p>
						This utility is a site where users can generate trends 
						based on factors related to traffic fatalities. The site uses a 
						robust dataset collected by the Fatality Analysis Reporting 
						System (FARS) and gives the users the option to determine the 
						leading causes of fatalities based on factors they select. To 
						make this possible, we needed to build our database schema in such 
						a way that there is a clear connection between an accident, the 
						vehicles involved in the accident, and the people involved in 
						the accident. We also wanted to create an easy-to-use site where 
						users can learn about the project, about the team, and most 
						importantly, can generate their trends and produce visualizations 
						that make the trends easy to interpret.
						</p>
					</div>
				</div>


				<br/>
				<h2>Meet the TFA Team:</h2>
				{/* <br/> */}

				<div style ={{marginLeft: "50px"}}>
					<div>
						<h4>Vincente Squitiro</h4>
						<div style ={{marginLeft: "50px"}}>
							<p>
								Vincente Squitiro was accepted as a Post Baccalaureate
								student to the UF Online Computer Science program in
								March 2019. As a UF Online student, Vincente wants to
								build a strong academic foundation as a first step to
								pursuing a career as a software developer.
								Vincente’s academic journey started at the University of
								Florida, where he earned a Bachelor of Science in
								Tourism, Recreation, and Sports Management with a
								specialization in Tourism and Hospitality. He went on to
								earn a Master of Science in Management with a
								Hospitality certificate at the University of Florida’s Hough
								Graduate School of Business.
							</p>
						</div>
					</div>


					<br/>
					<div>
						<h4>Jeremy Green</h4>
						<div style ={{marginLeft: "50px"}}>
							<p>
								Jeremy Green is currently a UF Online Computer Science major. 
								Previously he joined the School of Engineering + Technology as
								an Adjunct professor of Architecture and Interior Design in August
								2012. As a professor of Architecture Design, he is responsible for
								communicating and demonstrating professional techniques in the
								creation of architectural designs and their accompanying
								construction documents. He is also responsible for teaching
								professional and modern techniques in the process of architectural
								representation. He specifically covers a broad array of techniques
								ranging from photography, 3D rending, digital portfolio design,
								watercolor sketching and hand-drawn technical schematics to
								computational design in the realm of parametric modeling and
								complex procedurally generated patterns for articulated surfaces
								and structural designs.

							</p>
						</div>
					</div>

					<br/>
					<div>
						<h4>Brian De Pascale</h4>
						<div style ={{marginLeft: "50px"}}>
							<p>
								Brian De Pascale enrolled in UF as a Computer Science major summer
								semester 2019. Currently he is also an AP Physics teacher in central Florida
								where he has been teaching for the past 12 years. In those 12 years the
								majority were spent teaching Physics, he has also taught Biology, Zoology, and
								Chemistry. Brian was also head coach for track and field, sending several
								athletes to compete at the state level.
								Prior to enrollment in UF and his career in teaching Brian earned a Bachelor’s
								Degree in Biology with a Minor in Chemistry from Youngstown State
								University in Youngstown Ohio. More recently after enrolling in several
								Computer Science courses at Valencia College, and realizing he had a knack for programming and logic,
								he decided to enroll at UF to pursue a second degree and a career change to the Computer Science field.
								Along with teaching and his own studies Brian enjoys a wide variety of hobbies such as computer
								gaming, fishing, hunting, kayaking and diving, the latter of those prompting his move from Ohio to
								Florida in search of a more accommodating climate. He has spent time traveling in Europe visiting the
								U.K, France, Germany, Austria and Italy, and traveled across the Pacific to dive some of the most
								impressive reef systems in the world.
							</p>
						</div>
					</div>

				</div>

			</div>
      </div>
    );
  }
}

export default About;