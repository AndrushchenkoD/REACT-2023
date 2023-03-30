import React from 'react';
import Character from "./character/Character";

const App = () => {
    return (
        <div>
          <Character
              name={"Bart"}
          desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam atque cumque deleniti dolore eos error, hic magnam molestiae nam nemo obcaecati quasi quia saepe sequi temporibus, ullam velit voluptate!"}
          pic={"https://static.wikia.nocookie.net/springfieldbound/images/a/a3/Bart_Simpson_%28Official_Image%29.png"}/>
            <Character
            name={'Homer'}
            desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore eaque eum ex ipsa natus nisi quas quia quibusdam? Distinctio."}
            pic={"https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png"}/>
            <Character
            name={'Liza'}
            desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid debitis dolorum iure quis sint unde vitae. In, odit, totam."}
            pic={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}
            />
            <Character
                name={'Maggie'}
                desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid debitis dolorum iure quis sint unde vitae. In, odit, totam."}
                pic={'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}/>
            <Character
                name={'Marge'}
                desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid debitis dolorum iure quis sint unde vitae. In, odit, totam."}
                pic={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
        </div>
    );
};

export default App;