import styles from './about.module.css';

function About() {
    return (
        <>
            <p>We are a collective of software engineers, programmers, researchers, data scientists, and designers in the state of Kentucky</p>
            <p>Our purpose is to promote a sense of community among local technology organizations and their members. We seek to improve communication between leaders, centralize efforts, improve culture, and to support our members in a way that strengthens our community and promotes the common good</p>
            <div className={styles.codeofconduct}>
                <h1>Code Of Conduct</h1>
                <p>The Bluegrass Developers Guild is a group that welcomes anyone to come and learn, share, network and collaborate our skills and knowledge. This Code of Conduct outlines our expectations for all those who participate in our community, as well as the consequences for unacceptable behavior.
                    We invite all those who participate in our community to help us create safe and positive experiences for everyone.
                    tl;dr: Be excellent to each other.</p>
                <h1>Expected Behavior</h1>
                <p>
                    Participate in an authentic and active way. In doing so, you contribute to the health and longevity of this community.
                    Exercise consideration and respect in your speech and actions.
                    Attempt collaboration before conflict.
                    Refrain from demeaning, discriminatory, or harassing behavior and speech.
                    Be mindful of your surroundings and of your fellow participants. Alert community leaders if you notice a dangerous situation, someone in distress, or violations of this Code of Conduct, even if they seem inconsequential
                </p>
                <h1>Anti-harassment Policy</h1>
                <p>The Bluegrass Developers Guild is dedicated to providing a harassment-free experience for all, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age or religion. We do not tolerate harassment of anyone in any form. Sexual language and imagery is not appropriate for any venue, including talks and chat channels. Individuals violating these rules may be sanctioned or expelled from the event or communication channel at the discretion of our organizers.
                    Harassment includes verbal comments that reinforce social structures of domination related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion; sexual images in public spaces; deliberate intimidation; stalking; following; harassing photography or recording; sustained disruption of talks or other events; inappropriate physical contact; and unwelcome sexual attention. Participants asked to stop any harassing behavior are expected to comply immediately.</p>
                <h1>Violence-Free Community</h1>
                <p>The Bluegrass Developers Guild strictly prohibits violence, threats of violence, and any other behavior that jeopardizes or harms the safety and wellbeing of our community members or their property. This includes aggression, intimidation, belligerence, and disruptive behavior.</p>
                <h1>Technology Agnosticism</h1>
                <p>Our mission is to bridge communities surrounding a multitude of technologies. Whether discussing programming languages, platforms, libraries, tools, or editors; our organizers strive to be open minded and positive toward all, and we expect that you'll do the same.</p>
                <h1>Privacy Concerns</h1>
                <p>Your privacy is important to us. While photographs may be taken during events and can be shared by members on group's Meetup page, social media, etc., no photograph shall be used for commercial purposes without verbal and/or written consent of the attendees. If you wish to take photographs of the group, announce your intent in advance, so members may opt-out. If a group photograph is taken, your participation will serve as your agreement to the use of such a photograph for promotional purposes. If you are uncomfortable having your photograph shared, please let us know. Taking photographs of members who do not wish to be photographed falls under the anti-harrassment policy.

                    In public communication channels and events, please remember there is no reasonable expectation of privacy. Please be aware that any information you divulge in these arenas is deemed public information and is not protected.
                </p>
                <h1>Consequences Of Unacceptable Behavior</h1>
                <p>Unacceptable behavior from any community member, including sponsors and those with decision-making authority, will not be tolerated. If a participant engages in policy-violating behavior, organizers may take any action they deem appropriate, including warning the offender or expulsion from the community without warning (and without refund in the case of a paid event).</p>
                <h1>If You Witness or Are Subject to Unacceptable Behavior</h1>
                <p>If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact an organizer immediately.

                    Organizers will be happy to help participants contact security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe. We value your participation in our community</p>
                <h1>Scope</h1>
                <p>We expect all community participants (contributors, paid or otherwise; sponsors; and other guests) to abide by this Code of Conduct in all community venues—online and in-person—as well as in all one-on-one communications pertaining to community business.

                    The Bluegrass Developers Guild adopted this code of conduct from the Suncoast Developers Guild who used the anti-harassment policy created by the Ada Initiative (and other volunteers) as well as Ruby Berlin's Code of Conduct and the Citizen Code of Conduct as starting points.

                    This Code of Conduct is licensed under a Creative Commons Attribution-ShareAlike license.</p>
            </div>
        </>
    );
}

export default About;