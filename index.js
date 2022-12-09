const Button = props => {
    const {class, button} = props
    return <button class={`button ${class}`}>{button}</button>"
}

const element = (
    <div class="social-button-container">
    <div class="content-container">
    <h1 class="heading">Social Buttons</h1>
    <Button button="like" class="like-button"/>
    <Button button="comment" class="comment-button"/>
    <Button button="share" class="share-button"/>
    </div>
  </div>
</div>
)

ReactDOM.render(element, document.getElementById('root'))
