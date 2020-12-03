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
				<br/>
				<h2>Software Involved:</h2>
				{/* <br/> */}

				<div style ={{marginLeft: "50px"}}>
					<div>

						<h4>- React.js frontend</h4>
						<div style ={{marginLeft: "50px"}}>
							<p>
							Our frontend will allow the user to access graphical and text displayed information, such
							as printable lists or our choropleth map projections, upon its return as a result of our
							database queries.
							</p>
						</div>

						<h4>- ExpressJS and Node.js backend</h4>
						<div style ={{marginLeft: "50px"}}>
							<p>
							Our Node backend will receive requests from our React frontend and then process these
							request for our database.
							</p>
						</div>

						<h4>- Oracle Database</h4>
						<div style ={{marginLeft: "50px"}}>
							<p>
							The car crash data will be stored in a SQL Oracle database and will await for queries
							passed to it from our Node backend.
							</p>
						</div>

					</div>
				</div>



				<br/>
				<br/>
				<h2>Obtaining Real World Data:</h2>
				{/* <br/> */}

				<div style ={{marginLeft: "50px"}}>
					<div>
						<div style ={{marginLeft: "50px"}}>
							<p>
								To seed our database, we were able to obtain raw data regarding all fatalities recorded in all 50
								states of America and Puerto Rico in 2015. The data includes 1,354,045 tuples spread over 52 tables.
								The dataset was found on the data.world site and is provided by the Fatality Analysis Reporting System
								(FARS), which is a nationwide census that collects data regarding fatalities in traffic accidents. The data
								dictionary for the dataset does not provide information on the meaning behind the attributes, so we
								needed to obtain a copy of the ‘1975-2017 Fatality Analysis Reporting System (FARS) Analytical User’s
								Manual’ from the nhtsa.dot.gov site.
							</p>
						</div>
					</div>
				</div>


				<br/>
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
							</p>
							<p>
								Vincente’s academic journey started at the University of
								Florida, where he earned a Bachelor of Science in
								Tourism, Recreation, and Sports Management with a
								specialization in Tourism and Hospitality. He went on to
								earn a Master of Science in Management with a
								Hospitality certificate at the University of Florida’s Hough
								Graduate School of Business.
							</p>
							<p>
								For eight years, Vincente used his education and passion
								for hospitality in the field of hotel management with the
								Forbes Hamilton Management Company, as a Rooms
								Division Manager, Assistant General Manager, and
								General Manager. In his capacity as a hotel manager, Vincente had the opportunity to foster strong
								interpersonal and leadership skills while being responsible for multiple departments of up to 30 people.
								Vincente was fortunate enough to work in an environment where education and growth at every level was
								encouraged, so in addition to hiring new staff and conducting basic employee training, he was able to
								build one-on-one relationships with team members to focus on developing their individual strengths. He
								also led monthly team meetings to convert the first-hand experience of frontline employees into
								operational practices that would meet the needs of the rapidly changing hotel environment. The
								hospitality industry also gave Vincente a chance to hone his problem solving and customer service skills
								through his commitment to meeting the needs of hotel guests. One of Vincente’s strengths involved the
								field of revenue management, which involved learning multiple systems for managing rate channels,
								room inventory, and data on the competitive set.
							</p>

							<p>
								In 2016, Vincente’s mother-in-law was diagnosed with ALS. In order to provide the care that she needed,
								Vincente resigned from his position as General Manager and became her full-time caregiver. He was
								responsible for her daily needs, as well as basic physical and occupational therapy. During the course of
								caring for his mother-in-law, Vincente took self-directed online courses with Udacity to learn the basics
								of Python and JavaScript, as well as some basic programming fundamentals, rekindling his love of
								coding. When his mother-in-law passed in late 2018, Vincente decided to fulfill a long-term desire to
								explore the field of computer science, and transition into a new career
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
							
							<p>
								Prior to his work as an adjunct professor, Jeremy Green was a
								graduate student for 3 years at Harvard University’s Graduate
								School of Design in Cambridge Massachusetts, earning his
								master’s degree with a focus in computational design and immersive architectural representations. While
								matriculating at Harvard University he studied a plethora of subjects with the School of Design including
								Structural Optimizations, Quantitative Aesthetics, Immersive Environments, and Computer Aided Design and
								Manufacturing. To deepen his understanding of these focuses he also attended Harvard’s (Intro to Computer
								Science) CS50 as well as CS175 (Computer Graphics), where his passionate interest in the realm of computer
								science would form. He would use this focus on his graduate thesis where he designed and wrote his own game
								engine for the purpose of architectural abstraction and technical display of 3D CAD projects modeled and
								imported from any modern CAD software. Jeremy also served as a Teaching Fellow at Harvard for several GSD
								technology courses in rendering and parametric design.

							</p>

							<p>
								Jeremy Green graduated summa cum laude from the University of Florida with a Bachelor of Design in 2009.
								While earning his undergraduate degree at University of Florida’s School of Architecture, Jeremy was awarded
								“Top Ten” for academically being among the top 10% in his class of 110 students after his first two years of
								matriculation. Jeremy, during his junior and senior year, served as a Teaching Assistant for several Design 1 &
								2 courses. In this role, he would assist full time faculty in teaching fundamental architectural concepts and
								techniques to the freshman students. Additionally, during summer semester, Jeremy served as an Architecture
								Instructor and Counselor for the Design Exploration Program. Here he was responsible for helping prospective
								UF architecture students understand the architectural educational environment and introducing them to the
								fundamental aspects of UF’s design curriculum.
							</p>

							<p>
								Jeremy Green graduated from Santa Fe College in 2004 with an Associate in Arts degree in Computer Science.
								While earning this degree he also held the elected position of Student Body President of Santa Fe College in
								Gainesville Florida 2003 - 2004. In this role, Jeremy oversaw a student government spending budget of 1.4
								million dollars, interpreted and upheld the Student Government Constitution and its By-Laws, addressed the
								Student Senate weekly to make appointments or removals, and delivered a commencement speech to the
								graduating class. Jeremy Green was also responsible for meeting weekly with the college President Jackson
								Sasser and the various college Vice Presidents, acting as the voice and opinion of the entire student body on all
								important matters.
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
							</p>

							<p>
								Prior to enrollment in UF and his career in teaching Brian earned a Bachelor’s
								Degree in Biology with a Minor in Chemistry from Youngstown State
								University in Youngstown Ohio. More recently after enrolling in several
								Computer Science courses at Valencia College, and realizing he had a knack for programming and logic,
								he decided to enroll at UF to pursue a second degree and a career change to the Computer Science field. 
							</p>

							<p>
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