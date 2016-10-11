class MostRecentlyCompleted extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: []
    }
  }
  componentWillMount() {
     $.ajax({
      url: "/stories",
      method: 'GET',
      data: { list: "MostRecentlyCompleted" }
    }).done((response) => {
      this.setState({
        stories: response
      })
    })
  }

  render () {
    return (
       <div>
         <ul>
        {
          this.state.stories.map((story ,i) => {
            return (<ShowStory key={i} data={story} />)
          })
        }
        </ul>
       </div>
      )
  }
}
