# Coding task

Please take your time to finish these two tasks and submit them as stated in the email.

Try to make emphasis on the qiality of code & your solution.

Do the research for the tasks which you are not familiar with.

Before submiting your code, kindly check that all requirmenets are met.

Please kindly include the README.md to guide reviewer on how to find your code and run your application.

Share all sources code and relevant files and send the link to the project/repo so that the implementation can be reviewed in either:

- [stackblitz](https://stackblitz.com/) or

- github or similar service

## Typescript

You would need to use **Typescript**, which mean **you need to add missing types for the code**.

You have raw data in **`band`** variable, you need to write function(s) to transform the data into **`expected`** result.

### Requirements

 1. Using typescript for the code task

 2. Add types for the code / variables

 3. Copy all the code for `band.memebers.current` with no changes

 4. Copy all the code for `band.memebers.past` with no changes

 5. Add new prop `all` under `memebers`

    5.1. `all`: type is Array of string, contains all the members' name (both current and past)

    5.2. *Lowercase* all the members' name in `all`

    5.3. Sort `all` by memebers' `age` **DESC**

    5.4. Then sort `all` by memebers'`name` **ASC** (Notice: "gunter" is before "raymond" in the result)

 6. Add new prop `plays` under `expected`, type is Object.

    6.1.  `plays` contains all the unique plays in the `bands` object.
    6.2.  For each play, it should list all the members' name (vocals: ["sascha", "lucia", "raymond", "en"])
        6.2.1. Each memeber's name should be in lowercase
    6.3. Plays order doesn't matter and memeber names' order doesn't matter

```typescript

// Data

const band = {

    members: {

        current: [

            {name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass']},

            {name: 'Lucia', age: 49, plays: ['vocals', 'synth']},

            {name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth']},

            {name: 'Steve', age: 55, plays: ['guitar']}

        ],

        past: [

            {name: 'Raymond', age: 57, plays: ['vocals', 'synth']},

            {name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth']},

            {name: 'Gunter', age: 57, plays: ['guitar', 'synth']}

        ]

    }

};

const expected = {

  members: {

    // current: no changes

    current: [

      {name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass']},

      {name: 'Lucia', age: 49, plays: ['vocals', 'synth']},

      {name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth']},

      {name: 'Steve', age: 55, plays: ['guitar']}

    ],

    // past: no changes

    past: [

      {name: 'Raymond', age: 57, plays: ['vocals', 'synth']},

      {name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth']},

      {name: 'Gunter', age: 57, plays: ['guitar', 'synth']}

    ],

    // ORDER MATTERS!

    // 1. Sort age first by DESC

    // 2. then sort name by ASC

    // 3. lowercase all the names

    all: [

      "sascha",

      "gunter",

      "raymond",

      "steve",

      "jules",

      "en",

      "lucia"

    ]

  },

  // plays order doesn't matter

  plays: {

    // name order doesn't matter

    // but show the name in lowercase

    vocals: ["sascha", "lucia", "raymond", "en"],

    synth: ["sascha", "lucia", "jules", "raymond", "en", "gunter"],

    guitar: ["sascha", "jules", "steve", "en", "gunter"],

    bass: ["sascha", "jules"],

    drums: ["en"]

  }

}

```

## Component Design

Design a reusable Angular Dialog component

**Requirement: resuable, flexible**

`Title` area only display "Text" information.

`X` close button can dismiss the Dialog component.

In **Content area** should be able to display any **text, form, different custom components**.

Can close the dialog by **clicking X button** or **any custom button can trigger close event (for example, if you pass a form to the Content, when click `Submit` button should close the Dialog)**.

```text
  ---------------------------

  |                         |

  | <Title>              X  |

  ---------------------------

  |                         |

  |                         |

  | <Content>               |

  |                         |

  |                         |

  |-------------------------|
```

You can use Angular CLI or [stackblitz](https://stackblitz.com/) to create an Angular project.

1. Create `Dialog` component folder, all Dialog releated code should be inside this folder.

2. In `app.component.ts`, use `Dialog` component that you created with few example to show how to use your component (don't use any existing implementation such as Angular Material)

3. Styling is **not** important, you don't need to make it looks beautiful, background overlay is not required.

4. We mainly would like to see how you design a reusable component.

5. Basic unit testing cases for `Dialog` Component are **required**.

6. It is **not** necessary to implement ARIA / Keyboard focus, you can skip it and it won't affect the score. Of course, it is a **plus** to show us your knowledge about accessibility.
