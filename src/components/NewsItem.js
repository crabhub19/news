import React, { Component } from 'react'

export default class NewsItem extends Component {


  render() {
    let {imgUrl,title,article,readMore,id,author,publishedAt,source} = this.props;
    return (

      <div className='relative'>
        <article className="overflow-hidden rounded-lg border  dark:bg-slate-800 border-gray-100 bg-white dark:border-slate-400 shadow-lg shadow-slate-500 dark:shadow-red-900 dark:shadow-md h-full">
          <span className=' absolute -top-1 -right-1 bg-red-700 border-red-950 outline-double outline-3 rounded p-1 '>{source?source:"Unkwon"}</span>
          <img
              alt=""
              src={imgUrl?imgUrl:'https://biztoc.com/cdn/799/og.png'}
              className="h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6 grid">

              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {title?title.slice(0,45)+" ...":"Heading"}
              </h3>

              <p className=" mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-slate-300">
              {article?article.slice(0.,150)+" ...": "no article"}
              </p>

              <blockquote className=' text-right py-4 bg-gradient-to-r text-xs from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text self-end'><b>By {author?author.slice(0,18):"Unkwon "} </b> on <i>{new Date(publishedAt).toDateString()}</i>
              </blockquote>

              <p className=' absolute bottom-2'>
                <a href={readMore} target='blank' className="group w-full mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-red-600  ">
                Find out more

                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                    &rarr;
                </span>
                </a>
              </p>

          </div>
        </article>
      </div>
    )
  }
}           
