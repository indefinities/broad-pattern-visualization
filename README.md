# 📉 Broad Pattern Visualization Assessment

The data provided from the Pattern team within the Broad Institute was used to create visualizations using [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/) and coded using [WebStorm](https://www.jetbrains.com/webstorm/).

## 💻 Set-Up

1. Install [pnpm](https://pnpm.io/) as a package manager
2. Clone the project into a directory of your choice
3. Run `cd broad-pattern-visualization` to enter the directory for the repository
4. Run `pnpm install` to install all dependencies of the project
5. Run `pnpm dev` to run the project on your local environment.

## 💭 Food for Thought

1. *A simple chart showing the median for each tissue doesn’t let us see sample-level
   variations in the provided data set. Suggest one or more visualization ideas that will
   allow us to see how PTEN’s expression varies across tissues at the sample level.*

    In order to see how PTEN’s expression varies across tissues at the sample level, the first visualization concept would
be creating a **line graph**, with each color of the line connecting points (samples) corresponding with a `tissueSiteDetailId`.
Through visualizing a line graph, we will be able to see the trend within the given samples of each tissue and how they compare
to other tissues within the dataset.  
Furthermore, another visualization idea includes creating a **violin plot** for correlating with a `tissueSiteDetailId`. 
The violin plot would allow us to visualize the median, interquartile range, and the line simply representing the range of
samples, which will help demonstrate how PTEN’s expression varies across tissues at sample level.  
Finally, another visualization idea includes creating a **box plot** correlating with a `tissueSiteDetailId`. With each
box plot, the min, median, and max of each set of samples can be visualized within the graph, which will help demonstrate
how PTEN’s expression varies across tissues at sample level.  

2. *Researchers may be interested in seeing how the expression levels vary in different
   samples, depending on donor demographics, e.g. sex or ethnicity. Would you use the
   same visualization ideas, or something different?*

    Since donor demographics, such as sex or ethnicity, are considered an additional qualitative variables to include within the visualization, the same visualization ideas could be applicable. However, instead the visualizations would be better presented in a multi-series graph. For example, when considering sex as a donor demographic variable to visualize, one visualization for tissue samples would be representative for females, while also another visualization would be representative for male tissue samples. The same would apply when visualizing tissue samples for ethnicities, as displaying different visualizations for each ethnicity would assist in comparisons.
