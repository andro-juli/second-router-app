<template>

    <div class="users">
        <div>
            The name of this user is: {{ $route.params.id}}, go back to <router-link :to="{name: 'home'}">Home</router-link>
        </div>
            <div class="post-div" v-for="post in allPosts" :key="post.id">
                <h3>Post Title: {{ post.title }}</h3>
                <p>{{ post.content }}</p>
            </div>
    </div>
</template>

<script>
export default {
    name:'Post',
    data() {
        return {
            allPosts: [
                {"id": 1, 'title': 'The most funniest meme', 'content':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et rhoncus felis. Phasellus vel posuere lorem. Cras eu nulla a nibh ornare malesuada. Suspendisse potenti. Sed fringilla tincidunt leo sed vehicula. Donec vestibulum hendrerit sapien. Ut rhoncus, nunc ut efficitur bibendum, neque lacus mollis leo, a hendrerit turpis risus nec lacus. Donec facilisis iaculis tellus, quis dapibus erat tincidunt sed. Nulla augue tellus, maximus in ultrices ut, placerat nec odio. Etiam eget erat ut lorem lobortis euismod. Mauris dignissim aliquet nibh ac pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus facilisis pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'},
                {"id": 2, 'title': 'What to do when you just cant anymore', 'content': 'Suspendisse posuere sapien metus, nec congue elit efficitur nec. Aliquam vitae massa lectus. Cras efficitur mauris quam, eu dictum ligula sollicitudin in. Aliquam laoreet nunc ac rhoncus imperdiet. Ut pretium risus vel metus imperdiet maximus. Integer tempor mauris eu magna pellentesque rutrum. Duis interdum, lorem sit amet pharetra dignissim, orci ipsum finibus magna, placerat bibendum est quam facilisis nisi. Cras a pretium nunc. Ut dignissim ex nibh, sed lacinia turpis vehicula at. Phasellus eu libero at erat pretium posuere. Sed viverra accumsan ligula laoreet pharetra. Suspendisse sollicitudin neque eget magna pretium, eu ullamcorper nulla consequat. Fusce pulvinar tortor at ex commodo, dignissim rhoncus leo malesuada. Vestibulum tortor sem, ornare aliquet ante eget, ultrices finibus ipsum. Aliquam condimentum augue sem, eu mollis dui dignissim vel. Pellentesque a justo vitae nulla tristique porttitor.'},
                {"id": 3, 'title': 'Where to travel', 'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et rhoncus felis. Phasellus vel posuere lorem. Cras eu nulla a nibh ornare malesuada. Suspendisse potenti. Sed fringilla tincidunt leo sed vehicula. Donec vestibulum hendrerit sapien. Ut rhoncus, nunc ut efficitur bibendum, neque lacus mollis leo, a hendrerit turpis risus nec lacus. Donec facilisis iaculis tellus, quis dapibus erat tincidunt sed. Nulla augue tellus, maximus in ultrices ut, placerat nec odio. Etiam eget erat ut lorem lobortis euismod. Mauris dignissim aliquet nibh ac pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus facilisis pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'},
                {"id": 4, 'title': 'Destinations in Greece', 'content': 'Suspendisse posuere sapien metus, nec congue elit efficitur nec. Aliquam vitae massa lectus. Cras efficitur mauris quam, eu dictum ligula sollicitudin in. Aliquam laoreet nunc ac rhoncus imperdiet. Ut pretium risus vel metus imperdiet maximus. Integer tempor mauris eu magna pellentesque rutrum. Duis interdum, lorem sit amet pharetra dignissim, orci ipsum finibus magna, placerat bibendum est quam facilisis nisi. Cras a pretium nunc. Ut dignissim ex nibh, sed lacinia turpis vehicula at. Phasellus eu libero at erat pretium posuere. Sed viverra accumsan ligula laoreet pharetra. Suspendisse sollicitudin neque eget magna pretium, eu ullamcorper nulla consequat. Fusce pulvinar tortor at ex commodo, dignissim rhoncus leo malesuada. Vestibulum tortor sem, ornare aliquet ante eget, ultrices finibus ipsum. Aliquam condimentum augue sem, eu mollis dui dignissim vel. Pellentesque a justo vitae nulla tristique porttitor.'},
                {"id": 5, 'title': 'What is going on in America', 'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et rhoncus felis. Phasellus vel posuere lorem. Cras eu nulla a nibh ornare malesuada. Suspendisse potenti. Sed fringilla tincidunt leo sed vehicula. Donec vestibulum hendrerit sapien. Ut rhoncus, nunc ut efficitur bibendum, neque lacus mollis leo, a hendrerit turpis risus nec lacus. Donec facilisis iaculis tellus, quis dapibus erat tincidunt sed. Nulla augue tellus, maximus in ultrices ut, placerat nec odio. Etiam eget erat ut lorem lobortis euismod. Mauris dignissim aliquet nibh ac pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus facilisis pellentesque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'},
                {"id": 6, 'title': 'Problems with Astrazeneca?', 'content': 'Suspendisse posuere sapien metus, nec congue elit efficitur nec. Aliquam vitae massa lectus. Cras efficitur mauris quam, eu dictum ligula sollicitudin in. Aliquam laoreet nunc ac rhoncus imperdiet. Ut pretium risus vel metus imperdiet maximus. Integer tempor mauris eu magna pellentesque rutrum. Duis interdum, lorem sit amet pharetra dignissim, orci ipsum finibus magna, placerat bibendum est quam facilisis nisi. Cras a pretium nunc. Ut dignissim ex nibh, sed lacinia turpis vehicula at. Phasellus eu libero at erat pretium posuere. Sed viverra accumsan ligula laoreet pharetra. Suspendisse sollicitudin neque eget magna pretium, eu ullamcorper nulla consequat. Fusce pulvinar tortor at ex commodo, dignissim rhoncus leo malesuada. Vestibulum tortor sem, ornare aliquet ante eget, ultrices finibus ipsum. Aliquam condimentum augue sem, eu mollis dui dignissim vel. Pellentesque a justo vitae nulla tristique porttitor.'},
            ]
        }
    }
}
</script>

<style scoped>
a{
    color: chocolate;
    text-decoration: none;
}
.users{
    padding: 60px;
}
.post-div{
    background: oldlace;
    border: 2px solid brown;
    padding: 20px;
    margin-top: 20px;
    border-radius: 20px;
}

</style>