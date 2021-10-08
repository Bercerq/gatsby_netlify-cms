---
draft: true
code:
  code: |-
    return (
                <li key={post.fields.slug}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h2>
                      <small>{post.frontmatter.date}</small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                  </article>
                </li>
              )
color: "#ff0000"
birthdate: Sep 26th 21
start: October 4, 2021 1:00 AM
manual_pdf: package.json
layout: blog
thumbnail: /uploads/chocolate-dogecoin.jpg
testimonials:
  - quote: Everything is awesome!
    author: да
location: '{"type":"Point","coordinates":[17.4902344,25.4829512]}'
puppies: 2
profile:
  public: true
  birthdate: 10/05/2021
  name: wtf
  address:
    street: fwefwe
    city: wefwef
    post-code: wefwef
tags:
  - Design
  - Dev
title: fdsfsdfsdfwefwef
---
1. bla
2. bla 
3. bla
4. ## header

<iframe src="https://open.spotify.com/embed/playlist/6bO3DDKuZiWhm3jat4GVKg" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>