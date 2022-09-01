import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const NewsArticle = ({ heading,subtitle }) => (
    
    <div className="widgets__article">
        <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
)

const Widgets = () => {

    const articles = [{
        heading : "React Project",
        subtitle : "Lots of Readers"
    },{
        heading : "Firebase Backend",
        subtitle : "Supports this Project"
    },{
        heading : "Good Morning",
        subtitle : "Maybe Something..."
    },{
        heading : "Sunny Outside",
        subtitle : "Weather Report"
    },{
        heading : "React Project2",
        subtitle : "Lots of Readers"
    },{
        heading : "Firebase Backend2",
        subtitle : "Supports this Project"
    },{
        heading : "Good Morning2",
        subtitle : "Maybe Something..."
    },{
        heading : "Sunny Outside2",
        subtitle : "Weather Report"
    },{
        heading : "React Project3",
        subtitle : "Lots of Readers"
    },{
        heading : "Firebase Backend3",
        subtitle : "Supports this Project"
    },{
        heading : "Good Morning3",
        subtitle : "Maybe Something..."
    },{
        heading : "Sunny Outside3",
        subtitle : "Weather Report"
    }]

    return(
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {articles.map( article => <NewsArticle key={article.heading} {...article} /> )}
        </div>

    )
}

export default Widgets;