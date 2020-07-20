import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from '../models/book.model';

export class InMemBooksService implements InMemoryDbService {
    createDb() {
        let books: Book[] = [
            {
                id: 1,
                title: 'Invisible women. Exposing data bias in a world designed for men',
                authors: ['Caroline Criado Perez'],
                description: 'Imagine a world where your phone is too big for your hand, where your doctor prescribes a drug that is wrong for your body, where in a car accident you are 47% more likely to be seriously injured, where every week the countless hours of work you do are not recognised or valued. If any of this sounds familiar, chances are that you\'re a woman. Invisible Women shows us how, in a world largely built for and by men, we are systematically ignoring half the population. It exposes the gender data gap – a gap in our knowledge that is at the root of perpetual, systemic discrimination against women, and that has created a pervasive but invisible bias with a profound effect on women’s lives. Award-winning campaigner and writer Caroline Criado Perez brings together for the first time an impressive range of case studies, stories and new research from across the world that illustrate the hidden ways in which women are forgotten, and the impact this has on their health and well-being. From government policy and medical research, to technology, workplaces, urban planning and the media, Invisible Women reveals the biased data that excludes women. In making the case for change, this powerful and provocative book will make you see the world anew.',
                publishDate: new Date(2019, 3, 5),
                publisher: 'Vintage',
                startReadingDate: new Date(2020, 4, 27),
                readDate: new Date(2020, 4, 29),
                rating: 5
            },
            {
                id: 2,
                title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
                authors: ['James Clear'],
                description: 'No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world\'s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. If you\'re having trouble changing your habits, the problem isn\'t you. The problem is your system. Bad habits repeat themselves again and again not because you don\'t want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you\'ll get a proven system that can take you to new heights. Clear is known for his ability to distill complex topics into simple behaviors that can be easily applied to daily life and work. Here, he draws on the most proven ideas from biology, psychology, and neuroscience to create an easy-to-understand guide for making good habits inevitable and bad habits impossible. Along the way, readers will be inspired and entertained with true stories from Olympic gold medalists, award-winning artists, business leaders, life-saving physicians, and star comedians who have used the science of small habits to master their craft and vault to the top of their field. Learn how to make time for new habits (even when life gets crazy), overcome a lack of motivation and willpower, design your environment to make success easier, get back on track when you fall off course and much more. Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits--whether you are a team looking to win a championship, an organization hoping to redefine an industry, or simply an individual who wishes to quit smoking, lose weight, reduce stress, or achieve any other goal.',
                publishDate: new Date(2018, 10, 16),
                publisher: 'Avery',
                startReadingDate: new Date(2020, 3, 27),
                readDate: new Date(2020, 3, 29),
                rating: 4
            },
            {
                id: 3,
                title: 'Why We Sleep: Unlocking the Power of Sleep and Dreams',
                authors: ['Matthew Walker'],
                description: 'The first sleep book by a leading scientific expert—Professor Matthew Walker, Director of UC Berkeley’s Sleep and Neuroimaging Lab—reveals his groundbreaking exploration of sleep, explaining how we can harness its transformative power to change our lives for the better. Sleep is one of the most important but least understood aspects of our life, wellness, and longevity. Until very recently, science had no answer to the question of why we sleep, or what good it served, or why we suffer such devastating health consequences when we don\'t sleep. Compared to the other basic drives in life—eating, drinking, and reproducing—the purpose of sleep remained elusive. An explosion of scientific discoveries in the last twenty years has shed new light on this fundamental aspect of our lives. Now, preeminent neuroscientist and sleep expert Matthew Walker gives us a new understanding of the vital importance of sleep and dreaming. Within the brain, sleep enriches our ability to learn, memorize, and make logical decisions. It recalibrates our emotions, restocks our immune system, fine-tunes our metabolism, and regulates our appetite. Dreaming mollifies painful memories and creates a virtual reality space in which the brain melds past and present knowledge to inspire creativity. Walker answers important questions about sleep: how do caffeine and alcohol affect sleep? What really happens during REM sleep? Why do our sleep patterns change across a lifetime? How do common sleep aids affect us and can they do long-term damage? Charting cutting-edge scientific breakthroughs, and synthesizing decades of research and clinical practice, Walker explains how we can harness sleep to improve learning, mood, and energy levels; regulate hormones; prevent cancer, Alzheimer’s, and diabetes; slow the effects of aging; increase longevity; enhance the education and lifespan of our children, and boost the efficiency, success, and productivity of our businesses. Clear-eyed, fascinating, and accessible, Why We Sleep is a crucial and illuminating book.',
                publishDate: new Date(2017, 10, 3),
                publisher: 'Scribner',
                startReadingDate: new Date(2020, 4, 10),
                readDate: new Date(2020, 4, 27),
                rating: 3
            },
            {
                id: 4,
                title: 'Sapiens: A Brief History of Humankind',
                authors: ['Yuval Noah Harari'],
                description: '100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens. How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come? In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come? Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future. ',
                publishDate: new Date(2011, 1, 1),
                publisher: 'Harvill Secker',
                startReadingDate: new Date(2019, 10, 1),
                readDate: new Date(2019, 10, 29),
                rating: 3
            },
            {
                id: 5,
                title: 'Homo Deus: A History of Tomorrow',
                authors: ['Yuval Noah Harari'],
                description: 'Yuval Noah Harari, author of the critically-acclaimed New York Times bestseller and international phenomenon Sapiens, returns with an equally original, compelling, and provocative book, turning his focus toward humanity’s future, and our quest to upgrade humans into gods. Over the past century humankind has managed to do the impossible and rein in famine, plague, and war. This may seem hard to accept, but, as Harari explains in his trademark style—thorough, yet riveting—famine, plague and war have been transformed from incomprehensible and uncontrollable forces of nature into manageable challenges. For the first time ever, more people die from eating too much than from eating too little; more people die from old age than from infectious diseases; and more people commit suicide than are killed by soldiers, terrorists and criminals put together. The average American is a thousand times more likely to die from binging at McDonalds than from being blown up by Al Qaeda. What then will replace famine, plague, and war at the top of the human agenda? As the self-made gods of planet earth, what destinies will we set ourselves, and which quests will we undertake? Homo Deus explores the projects, dreams and nightmares that will shape the twenty-first century—from overcoming death to creating artificial life. It asks the fundamental questions: Where do we go from here? And how will we protect this fragile world from our own destructive powers? This is the next stage of evolution. This is Homo Deus. With the same insight and clarity that made Sapiens an international hit and a New York Times bestseller, Harari maps out our future.',
                publishDate: new Date(2017, 2, 21),
                publisher: 'Harper',
                startReadingDate: new Date(2019, 11, 21),
                readDate: new Date(2019, 12, 14),
                rating: 4
            },
            {
                id: 6,
                title: 'So You Want to Talk About Race',
                authors: ['Ijeoma Oluo'],
                description: 'In this breakout book, Ijeoma Oluo explores the complex reality of today\'s racial landscape--from white privilege and police brutality to systemic discrimination and the Black Lives Matter movement--offering straightforward clarity that readers need to contribute to the dismantling of the racial divide. In So You Want to Talk About Race, Editor at Large of The Establishment Ijeoma Oluo offers a contemporary, accessible take on the racial landscape in America, addressing head-on such issues as privilege, police brutality, intersectionality, micro-aggressions, the Black Lives Matter movement, and the "N" word. Perfectly positioned to bridge the gap between people of color and white Americans struggling with race complexities, Oluo answers the questions readers don\'t dare ask, and explains the concepts that continue to elude everyday Americans. Oluo is an exceptional writer with a rare ability to be straightforward, funny, and effective in her coverage of sensitive, hyper-charged issues in America. Her messages are passionate but finely tuned, and crystalize ideas that would otherwise be vague by empowering them with aha-moment clarity. Her writing brings to mind voices like Ta-Nehisi Coates and Roxane Gay, and Jessica Valenti in Full Frontal Feminism, and a young Gloria Naylor, particularly in Naylor\'s seminal essay "The Meaning of a Word."',
                publishDate: new Date(2018, 1, 16),
                publisher: 'Seal Press',
                startReadingDate: null,
                readDate: null,
                rating: null
            }
        ];

        return { books };
    }
}
