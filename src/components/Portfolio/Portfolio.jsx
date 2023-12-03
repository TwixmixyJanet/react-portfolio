import { 
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCol,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBCardLink,
    MDBCardFooter
} from 'mdb-react-ui-kit';
import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import project3 from '../../assets/images/project3.png';
import project4 from '../../assets/images/project4.png';
import project5 from '../../assets/images/project5.png';
import project6 from '../../assets/images/project6.png';

const Portfolio = () => {
    return (
        <MDBContainer fluid className="h-100 pb-4 bkgrd">
            <MDBRow className="row-cols-1 row-cols-md-3 g-3 pt-2">
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position='top' src={project1}/>
                        <MDBCardBody>
                            <MDBCardTitle>Critter Clicker</MDBCardTitle>
                            <MDBCardText>
                                <p>A social media site to share pictures of your pets</p>
                                <p>Technologies used: HTML, CSS, JavaScript, NodeJS, ExpressJS, Handlebars, Bootstrap, MySQL, Sequelize, Cloudinary, Heroku</p>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href='https://github.com/mitsukaichi/critter-clicker'>Repo Link</MDBCardLink>
                            <MDBCardLink href='https://critter-clicker-c6c973aed451.herokuapp.com/'>Deploy Link</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position='top' src={project2}/>
                        <MDBCardBody>
                            <MDBCardTitle>Qif - A Quote & Giphy Generator</MDBCardTitle>
                            <MDBCardText>
                                <p>This is a quote and giphy generator based off a keyword search</p>
                                <p>Technologies used: HTML, CSS, JavaScript, Tailwind CSS, Granim, APIs, Git, VSCode</p>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href='https://github.com/TwixmixyJanet/Qif-Generator'>Repo Link</MDBCardLink>
                            <MDBCardLink href='https://twixmixyjanet.github.io/Qif-Generator/'>Deploy Link</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position='top' src={project3}/>
                        <MDBCardBody>
                            <MDBCardTitle>Full Stack Community Blog</MDBCardTitle>
                            <MDBCardText>
                                <p>This is a full stack blog built in the content management essentials that allows users to login, create, manage, and delete articles.</p>
                                <p>Technologies used: HTML, CSS, JavaScript, Tailwind CSS, Granim, APIs, Git, VSCode</p>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href='https://github.com/TwixmixyJanet/tech-blog'>Repo Link</MDBCardLink>
                            <MDBCardLink href='https://janets-tech-blog-a73a7af9497f.herokuapp.com/'>Deploy Link</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position='top' src={project4}/>
                        <MDBCardBody>
                            <MDBCardTitle>Weather Dashboard</MDBCardTitle>
                            <MDBCardText>
                                <p>This is a JavaScript, API and Bootstrap focused project with the goal to create a weather dashboard app</p>
                                <p>Technologies used: HTML, CSS, JavaScript, jQuery, APIs, DayJS, Bootstrap, GitHub Pages</p>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href='https://github.com/TwixmixyJanet/weather-dashboard'>Repo Link</MDBCardLink>
                            <MDBCardLink href='https://twixmixyjanet.github.io/weather-dashboard/'>Deploy Link</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position='top' src={project5}/>
                        <MDBCardBody>
                            <MDBCardTitle>Interactive Timed Quiz</MDBCardTitle>
                            <MDBCardText>
                                <p>This project is a JavaScript focused application with the goal to create a timed quiz that will keep score based on the results</p>
                                <p>Technologies used: HTML, CSS, JavaScript, APIs, GitHub Pages</p>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href='https://github.com/TwixmixyJanet/code-quiz'>Repo Link</MDBCardLink>
                            <MDBCardLink href='https://twixmixyjanet.github.io/code-quiz/'>Deploy Link</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="h-100">
                        <MDBCardImage className="img-thumbnail" position='top' src={project6}/>
                        <MDBCardBody>
                            <MDBCardTitle>Fully Flex Portfolio</MDBCardTitle>
                            <MDBCardText>
                                <p>A front end portfolio application with all from-scratch code and no CDNs or NPMs</p>
                                <p>Technologies used: HTML, CSS, JavaScript, GitHub Pages, VSCode, Web Accessibiity</p>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center">
                            <MDBCardLink href='https://github.com/TwixmixyJanet/janet-webster-portfolio'>Repo Link</MDBCardLink>
                            <MDBCardLink href='https://twixmixyjanet.github.io/janet-webster-portfolio/'>Deploy Link</MDBCardLink>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
};

export default Portfolio;