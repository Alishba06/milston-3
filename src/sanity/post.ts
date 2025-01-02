import { Rule } from "postcss";
import { defineType , defineField , defineArrayMember } from "sanity";

export const post = defineType({
    name: 'post',
    type: 'document',
    title: 'Post',
    fields:[
        defineField({
            name:"title",
            type:"string",
            title:"Post title",

            validation: (Rule: { required: () => any; }) => Rule.required().error("Field ko dekho, yeh na tumhara intezaar kar raha hai. Nahi bharega toh golli ka target tum hi banoge! 😂🔫")
        }),

        defineField({
            name:'slug',
            type:'slug',
            title:'Slug',
            options:{
                source:'title',
                maxLength: 96
            },
            validation:Rule => Rule.required().error(' Arre, is field ko fill karna mat bhoolna! 😂 Nahi toh error ka full Bollywood drama chalega 🎭 Error bolega Main tumhara project chhod ke jaa raha hoon Toh hero bano, field fill karo, aur project ka happy ending banwao! 🎉😎')
        }),

        defineField({
            name:"summary",
            type:"text",
            title:"Summary",

            validation:Rule => Rule.required().error('Field fill kar lo warna system bolega Beta, agay entry band hai 😂😎')
        }),
        defineField({
            name:'image',
            type:'image',
            title:'Image',
        }),

        defineField({
            name:'content',
            type:'array',
            title:"Content", 
            of:[
                defineArrayMember({
                    type:'block'
                })
            ]
        }),

        defineField({
            name:'author',
            type:'reference',
            title:'Author',
            to:[{
                type:'author'
            }]
        })
        
   
        // {
        //     name:'gender',
        //     type:'string',
        //     title:' Gender',
        //     options:{
        //         list:[
        //             {title:'Male',value:'male'},
        //             {title:'Female',value:'female'}
        //         ],
        //         layout:'radio',
        //         direction:'horizontal'
        //     }
        // }




    ]
})