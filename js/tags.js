$(document).ready(function() {
    // Assume `tags` is an array of tags loaded from tags.js
    var tags = ['HTML', 'CSS', 'JavaScript', 'Java', 'React', 'PHP','Python','iOS']; // Replace with your tag data

    // Initialize the autocomplete
    $('#searchInput').autocomplete({
        source: tags, // Provide the array of tags as the source
        minLength: 1, // Minimum characters before the autocomplete activates
        select: function(event, ui) {
            // Do something when a tag is selected
            console.log('Selected tag:', ui.item.value);
        }
    });
});
